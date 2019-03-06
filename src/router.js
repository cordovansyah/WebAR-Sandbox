import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import ARSandbox from "./views/ARSandbox.vue";
import SignIn from "./views/Authentication/SignIn";
import Request from "./views/Authentication/Request";
import Recover from "./views/Authentication/Recover";
import Furnitures from "./views/ARSandbox/Furnitures";
import Random from "./views/ARSandbox/Random";
import Profilepage from "./views/Profilepage";
import Editor from "./views/Editor/Editor";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "arsandbox",
      component: ARSandbox
    },
    // {
    //   path: "/arsandbox",
    //   name: "arsandbox",
    //   component: ARSandbox
    // },
    {
      path: "/signin",
      name: "signin",
      component: SignIn
    },
    {
      path: "/request",
      name: "request",
      component: Request
    },
    {
      path: "/recover",
      name: "recover",
      component: Recover
    },
    {
      path: "/editor",
      name: "editor",
      component: Editor
    },

    //AR Sandbox
    {
      path: "/furnitures",
      name: "furnitures",
      component: Furnitures
    },
    {
      path: "/random",
      name: "random",
      component: Random
    },

    //Profile
    {
      path: "/myprofile",
      name: "profilepage",
      component: Profilepage
    }
  ]
});