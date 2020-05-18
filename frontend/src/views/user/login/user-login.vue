<template>
  <section class="section section-shaped section-lg my-0">
    <div class="shape shape-style-1 bg-gradient-default">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <card
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class="border-0"
          >
            <template>
              <div class="text-muted text-center mb-3">
                <small>Sign in with</small>
              </div>
              <div class="btn-wrapper text-center">
                <base-button type="neutral">
                  <img slot="icon" src="img/icons/common/github.svg" />
                  Github
                </base-button>

                <base-button type="neutral">
                  <img slot="icon" src="img/icons/common/google.svg" />
                  Google
                </base-button>
              </div>
            </template>
            <template>
              <div class="text-center text-muted mb-4">
                <small>Or sign in with credentials</small>
              </div>
              <form role="form">
                <base-input
                  alternative
                  v-model="user_id"
                  class="mb-3"
                  placeholder="Id"
                  addon-left-icon="ni ni-hat-3"
                >
                </base-input>
                <base-input
                  alternative
                  v-model="password"
                  type="password"
                  placeholder="Password"
                  addon-left-icon="ni ni-lock-circle-open"
                >
                </base-input>
                <base-checkbox>
                  Remember me
                </base-checkbox>
                <div class="text-center" @click="submitHandler">
                  <base-button type="primary" class="my-4">Sign In</base-button>
                </div>
              </form>
            </template>
          </card>
          <div class="row mt-3">
            <div class="col-6">
              <a href="#" class="text-light">
                <small>Forgot password?</small>
              </a>
            </div>
            <div class="col-6 text-right">
              <a href="#" class="text-light">
                <small>Create new account</small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import api from "@/utils/api.js";
export default {
  data() {
    return {
      user_id: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters(["getIsAuth", "getToken"])
  },
  methods: {
    submitHandler() {
      api
        .post("/api/user/login", {
          user_id: this.user_id,
          password: this.password
        })
        .then(res => {
          return this.loginProcess({
            user_id: res.data.user_id,
            token: res.data.token
          });
        })
        .then(res => {
          this.$router.push({ path: "/" });
        })
        .catch(err => {
          if (err.response !== undefined) {
            alert(err.response.data.message);
          } else {
            console.log(err);
          }
        });
    },
    ...mapActions(["loginProcess"])
  }
};
</script>
<style></style>
