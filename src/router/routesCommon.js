export default [
  {
    path: "/login",
    name: "AccountLogin",
    component: () =>
      import(/* webpackChunkName: "account" */ "@/views/AccountLogin.vue"),
  },
  {
    path: "/404",
    name: "TheError404",
    component: () =>
      import(/* webpackChunkName: "TheError404" */ "@/views/TheError404.vue"),
  },
  // {
  //   path: "*",
  //   redirect: { name: "TheError404" },
  // },
];
