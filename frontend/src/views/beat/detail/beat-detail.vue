<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-lg-9 p-0">
        <h1>{{beatDetail.music_title}}</h1>
        <h5>{{beatDetail.nickname}}</h5>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-lg-9 p-0">
        노래!!사진!!
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-lg-9 p-0">
        <p>{{ beatDetail.music_description }}</p>
      </div>
    </div>
    <div class="row mt-3">
      <badge class="col-lg-1 ml-0 my-2 mr-2" type="warning" rounded>{{
        beatDetail.music_tag_1
      }}</badge>
      <badge class="col-lg-1 m-2" type="warning" rounded>{{
        beatDetail.music_tag_2
      }}</badge>
      <badge class="col-lg-1 m-2" type="warning" rounded>{{
        beatDetail.music_tag_3
      }}</badge>
    </div>
    <div class="row">
      <base-button
        @click="listenHandler"
        class="col-lg-3 ml-0 my-2 mr-2 "
        type="success"
        >들어보기</base-button
      >
    </div>
    <div class="row mt-3">
      <div class="col-lg-9 p-0 m-0">
        <base-input>
          <textarea
            class="form-control form-control-alternative m-0"
            name="name"
            rows="5"
            cols="80"
          ></textarea>
        </base-input>
      </div>
    </div>
    <div class="row mt-2">
      <div class="list of comments"></div>
      <div class="col-lg-1 offset-lg-8">
        <base-button size="md" type="secondary">작성</base-button>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 p-0">
        <i class="ni ni-curved-next"></i><span style="magin:0 0.5rem"></span>
        <h6 style="display:inline" class="name text-left">comments</h6>
      </div>
    </div>
    <div class="row comment">
      <div class="col-lg-12 p-0">
        <h6 class="name">name</h6>
        <span></span>
        <h6 class="comment">comments!!</h6>
      </div>
    </div>
    <div class="row comment">
      <div class="col-lg-12 p-0">
        <h6 class="name">name</h6>
        <span></span>
        <h6 class="comment">comments!!</h6>
      </div>
    </div>
    <div class="row comment">
      <div class="col-lg-12 p-0">
        <h6 class="name">name</h6>
        <span></span>
        <h6 class="comment">comments!!</h6>
      </div>
    </div>
    <div class="row comment">
      <div class="col-lg-12 p-0">
        <h6 class="name">name</h6>
        <span></span>
        <h6 class="comment">comments!!</h6>
      </div>
    </div>
    <div class="row comment">
      <div class="col-lg-12 p-0">
        <h6 class="name">name</h6>
        <span></span>
        <h6 class="comment">comments!!</h6>
      </div>
    </div>
    <div class="row comment">
      <div class="col-lg-12 p-0">
        <h6 class="name">name</h6>
        <span></span>
        <h6 class="comment">comments!!</h6>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/utils/api";
import {mapActions} from "vuex";
export default {
  data() {
    return {
      beatDetail: {}
    };
  },
  created() {
    api
      .get("/api/beat/getBeatDetail", {
        params: { music_idx: this.$route.params.music_idx }
      })
      .then(res => {
        this.beatDetail = res.data;
      })
      .catch(err => {
        console.log(err);
        alert(err);
      });
  },
  methods: {
    listenHandler(){
      this.addPlaylistProcess(this.beatDetail);
    },
    ...mapActions(['addPlaylistProcess'])
  }
};
</script>

<style>
.comment {
  margin: 1rem 0;
}

.comment span {
  margin: 0 0.8rem;
  border-right: 0.1rem solid #aeb6c2;
}

.name {
  display: inline;
}

.comment {
  display: inline;
}
</style>
