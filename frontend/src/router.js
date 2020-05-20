import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Home from "./views/home/home.vue";
import UserLogin from "./views/user/login/user-login.vue";
import UserRegister from "./views/user/register/user-register.vue";
import UserProfile from "./views/user/profile/user-profile.vue";
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
      path:"/beat/detail/:music_idx",
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
      name: "home",
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter,
        player:PlayFooter
      }
    },
    {
      path: "/user/login",
      name: "userlogin",
      components: {
        header: AppHeader,
        default: UserLogin,
        footer: AppFooter,
        player:PlayFooter
      }
    },
    {
      path: "/user/register",
      name: "userregister",
      components: {
        header: AppHeader,
        default: UserRegister,
        footer: AppFooter,
        player:PlayFooter
      }
    },
    {
      path: "/user/profile",
      name: "userprofile",
      components: {
        header: AppHeader,
        default: UserProfile,
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
