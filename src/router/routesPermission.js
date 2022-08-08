import BasicLayout from "@/components/BasicLayout.vue";

export default [
  {
    path: "/",
    name: "Root",
    component: BasicLayout,
    redirect: { name: "TheDashboard" },
    children: [
      {
        path: "/dashboard",
        name: "TheDashboard",
        component: () =>
          import(
            /* webpackChunkName: "TheDashboard" */ "@/views/TheDashboard.vue"
          ),
        meta: {
          nav: {
            icon: "el-icon-pie-chart",
            title: "概况",
          },
          breadcrumb: {
            title: "概况",
          },
        },
      },
      {
        path: "/article",
        name: "ArticleRoot",
        permission: "article-manage",
        component: { render: (h) => h("router-view") },
        meta: {
          nav: {
            icon: "el-icon-tickets",
            title: "文章",
          },
          breadcrumb: {
            title: "文章",
          },
        },
        children: [
          {
            path: "/article/classify",
            name: "ArticleClassify",
            component: () =>
              import(
                /* webpackChunkName: "article" */ "@/views/ArticleClassify.vue"
              ),
            meta: {
              nav: {
                icon: "el-icon-paperclip",
                title: "文章分类",
              },
              breadcrumb: {
                title: "分类",
              },
            },
          },
          {
            path: "/article",
            name: "ArticleIndex",
            component: () =>
              import(
                /* webpackChunkName: "article" */ "@/views/ArticleIndex.vue"
              ),
            meta: {
              nav: {
                icon: "el-icon-document-copy",
                title: "所有文章",
              },
              breadcrumb: {
                title: "所有",
              },
            },
          },
          {
            path: "/article/create",
            name: "ArticleCreate",
            component: () =>
              import(
                /* webpackChunkName: "article" */ "@/views/ArticleCreate.vue"
              ),
            meta: {
              nav: {
                icon: "el-icon-document-add",
                title: "新建文章",
              },
              breadcrumb: {
                title: "新建",
              },
            },
          },
          {
            path: "/article/:id",
            name: "ArticleShow",
            component: () =>
              import(
                /* webpackChunkName: "article" */ "@/views/ArticleShow.vue"
              ),
            meta: {
              breadcrumb: {
                title: "详情",
              },
            },
          },
          {
            path: "/article/:id/edit",
            name: "ArticleEdit",
            component: () =>
              import(
                /* webpackChunkName: "article" */ "@/views/ArticleEdit.vue"
              ),
            meta: {
              breadcrumb: {
                title: "编辑",
              },
            },
          },
        ],
      },
      {
        path: "/setting",
        name: "SettingRoot",
        component: { render: (h) => h("router-view") },
        meta: {
          nav: {
            icon: "el-icon-setting",
            title: "设置",
          },
          breadcrumb: {
            title: "设置",
          },
        },
        children: [
          {
            path: "/setting/company",
            name: "SettingCompany",
            permission: "setting-company",
            component: () =>
              import(
                /* webpackChunkName: "setting" */ "@/views/SettingCompany.vue"
              ),
            meta: {
              nav: {
                icon: "el-icon-office-building",
                title: "公司设置",
              },
              breadcrumb: {
                title: "公司",
              },
            },
          },
          {
            path: "/setting/manager",
            name: "SettingManagerRoot",
            permission: "setting-manager",
            component: { render: (h) => h("router-view") },
            redirect: { name: "SettingManager" },
            meta: {
              nav: {
                icon: "el-icon-user",
                title: "管理员设置",
              },
              breadcrumb: {
                title: "管理员",
                replace: true,
              },
            },
            children: [
              {
                path: "/setting/manager",
                name: "SettingManager",
                component: () =>
                  import(
                    /* webpackChunkName: "setting" */ "@/views/SettingManager.vue"
                  ),
              },
              {
                path: "/setting/manager/create",
                name: "SettingManagerCreate",
                component: () =>
                  import(
                    /* webpackChunkName: "setting" */ "@/views/SettingManagerCreate.vue"
                  ),
                meta: {
                  breadcrumb: {
                    title: "创建",
                  },
                },
              },
              {
                path: "/setting/manager/:id/edit",
                name: "SettingManagerEdit",
                component: () =>
                  import(
                    /* webpackChunkName: "setting" */ "@/views/SettingManagerEdit.vue"
                  ),
                meta: {
                  breadcrumb: {
                    title: "编辑",
                  },
                },
              },
            ],
          },
        ],
      },
    ],
  },
];
