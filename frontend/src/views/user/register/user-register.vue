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
              <!--
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
              </div>-->
            </template>
            <template>
              <div class="text-center text-muted mb-4">
                <small>Or sign up with credentials</small>
              </div>
              <form role="form">
                <base-input
                  alternative
                  v-model="user_id"
                  class="mb-3"
                  placeholder="id : 영문숫자 혼용 6자 이상"
                  addon-left-icon="ni ni-hat-3"
                >
                </base-input>
                <base-input
                  alternative
                  v-model="nickname"
                  class="mb-3"
                  placeholder="nickname : 3자 이상"
                  addon-left-icon="fa fa-address-card"
                >
                </base-input>
                <base-input
                  alternative
                  v-model="email"
                  class="mb-3"
                  placeholder="Email"
                  addon-left-icon="ni ni-email-83"
                >
                </base-input>

                <base-input
                  alternative
                  v-model="tel"
                  class="mb-3"
                  placeholder="tel : -를 빼고 입력"
                  addon-left-icon="fa fa-phone"
                >
                </base-input>
                <base-input
                  alternative
                  v-model="password"
                  type="password"
                  placeholder="password : 8자 이상 20자 이하"
                  addon-left-icon="ni ni-lock-circle-open"
                >
                </base-input>
                <div class="text-muted font-italic">
                  <small
                    >password strength:
                    <span class="text-success font-weight-700">strong</span>
                  </small>
                </div>
                <base-checkbox v-model="privacy">
                  <span
                    >I agree with the
                    <a href="#">Privacy Policy</a>
                  </span>
                </base-checkbox>
                <div class="text-center">
                  <base-button
                    @click="submitHandler"
                    type="primary"
                    class="my-4"
                    >Create account</base-button
                  >
                </div>
              </form>
            </template>
          </card>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Axios from "axios";
import api from "@/utils/api.js"
export default {
  data() {
    return {
      user_id: "",
      nickname: "",
      email: "",
      tel: "",
      password: "",
      privacy: false
    };
  },
  methods: {
    submitHandler() {
      if (this.privacy === true) {
        api.put("/api/user/signup", {
          user_id: this.user_id,
          nickname: this.nickname,
          email: this.email,
          tel: this.tel,
          password: this.password
        })
          .then(res => {
            if (res.data.result === 0) {
              alert("가입에 성공했습니다! 로그인해주세요!")
              this.$router.push({ path: "/" });
            }
            else{
                console.log(res)
            }
          })
          .catch((err) => {
              var errStr=""
              err.response.data.data.forEach((err)=>{
                  errStr+=err.msg + "\n"
              })
              alert(errStr)
          });
      } else {
        alert("plz check box for privacy");
      }
    }
  }
};
</script>
<style></style>
