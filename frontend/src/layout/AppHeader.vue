<template>
  <header class="header-global">
    <base-nav class="navbar-main" effect="light" expand>
      <router-link slot="brand" class="navbar-brand mr-lg-5 brand-hover" to="/">
        <h1 class="text-center text-white m-auto display-3">BIPHOP</h1>
      </router-link>
      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
          <a
            slot="title"
            href="#"
            class="nav-link"
            data-toggle="dropdown"
            role="button"
          >
            <i class="ni ni-ui-04 d-lg-none"></i>
            <span class="nav-link-inner--text text-white">Beats!</span>
          </a>
          <div class="dropdown-menu-inner">
            <router-link
              to="/beat/list"
              class="media d-flex align-items-center"
            >
              <div
                class="icon icon-shape bg-gradient-warning rounded-circle text-white"
              >
                <i class="ni ni-bullet-list-67"></i>
              </div>
              <div class="media-body ml-3">
                <h5 class="display-4 heading text-warning mb-md-1">
                  Beat List
                </h5>
                <p class="description d-none d-md-inline-block mb-0">
                  그들의 비트를 들어봐요!!
                </p>
              </div>
            </router-link>
            <router-link
              to="/beat/write"
              class="media d-flex align-items-center"
            >
              <div
                class="icon icon-shape bg-gradient-warning rounded-circle text-white"
              >
                <i class="ni ni-headphones"></i>
              </div>
              <div class="media-body ml-3">
                <h5 class="heading text-warning mb-md-1">Beat Upload</h5>
                <p class="description d-none d-md-inline-block mb-0">
                  당신의 비트를 보여주세요!
                </p>
              </div>
            </router-link>
          </div>
        </base-dropdown>
      </ul>
      <ul class="navbar-nav align-items-lg-center ml-lg-auto navbar-nav-hover">
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://www.instagram.com/creativetimofficial"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="chatting-list"
          >
            <i class="ni ni-email-83 bg-gradient-warining"></i>
            <span class="nav-link-inner--text d-lg-none"></span>
          </a>
        </li>
        <base-dropdown tag="li" class="nav-item">
          <a
            slot="title"
            href="#"
            class="nav-link"
            data-toggle="dropdown"
            role="button"
          >
            <i class="ni ni-collection d-lg-none"></i>
            <span class="nav-link-inner--text text-white">MEMBER</span>
          </a>
          <router-link v-if="!isAuth" to="/user/register" class="dropdown-item"
            >Register</router-link
          >
          <router-link
            v-if="isAuth"
            @click.native="logoutHandler"
            to="/logout"
            class="dropdown-item"
            >Logout</router-link
          >
          <router-link v-if="isAuth" to="/user/profile" class="dropdown-item"
            >Profile</router-link
          >
          <router-link v-if="!isAuth" to="/user/login" class="dropdown-item"
            >Login</router-link
          >
        </base-dropdown>
      </ul>
    </base-nav>
  </header>
</template>

<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";
import { mapActions } from "vuex";
export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  },
  computed: {
    isAuth() {
      return this.$store.getters.getIsAuth;
    }
  },
  methods: {
    logoutHandler() {
      console.log(this.isAuth);
      this.logoutProcess()
        .then(msg => {
          if (msg === true) {
            alert("로그아웃이 정상적으로 되지 않았습니다.");
            this.$router.push({ path: "/" });
          } else {
            alert("로그아웃이 되었습니다.");
            this.$router.push({ path: "/" });
          }            
        })
        .catch(err => {
          alert("로그아웃이 정상적으로 되지 않았습니다.");
          console.log(err);
        });
    },
    ...mapActions(["logoutProcess"])
  }
};
</script>

<style scoped>
.brand-hover.hover {
  background-color: black;
}
</style>
