import Vue from "vue";
import VueRouter from "vue-router";
import { fetchFilterPermissionRoutes, commonRoutes } from "./routes";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import DataStore from "@/global/storage/index";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: commonRoutes,
});

router.hasAddRouter = false;
router.beforeEach(async (to, from, next) => {
  NProgress.start();
  const TOKEN = DataStore.getToken();
  if (!TOKEN && to.name !== "AccountLogin") {
    next({ name: "AccountLogin", replace: true });
    return;
  }
  if (TOKEN) {
    if (!router.hasAddRouter) {
      const filterRoutes = await fetchFilterPermissionRoutes();
      router.hasAddRouter = true;
      router.addRoutes(filterRoutes);
      next({ ...to, replace: true });
      return;
    }
    if (to.name === "AccountLogin") {
      next({ name: "Root", replace: true });
      return;
    }
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
