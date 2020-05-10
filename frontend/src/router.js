import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import BeatList from "./views/beat/list/beat-list.vue"
import BeatWrite from "./views/beat/write/beat-write.vue"
import BeatDetail from "./views/beat/detail/beat-detail.vue"
import PlayFooter from "./layout/player-footer.vue"

Vue.use(Router);

export default new Router({
  mode:"history",
  linkExactActiveClass: "active",
  routes: [
    //beat
    {
      path:"/beat/list",
      name:"beatlist",
      components:{
        header:AppHeader,
        default:BeatList,
        footer:AppFooter,
        player:PlayFooter
      }
    },    
    {
      path:"/beat/write",
      name:"beatwrite",
      components:{
        header:AppHeader,
        default:BeatWrite,
        footer:AppFooter,
        player:PlayFooter
      }
    },
    {
      path:"/beat/detail",
      name:"beatdetail",
      components:{
        header:AppHeader,
        default:BeatDetail,
        footer:AppFooter,
        player:PlayFooter
      }
    },
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter,
        player:PlayFooter
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter,
        player:PlayFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter,
        player:PlayFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter,
        player:PlayFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter,
        player:PlayFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
