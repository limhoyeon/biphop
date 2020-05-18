<template>
  <div class="position-relative" style="margin-top:25rem">
    <section class="section section-lg pt-lg-0 section-contact-us">
      <div class="container">
        <div class="row justify-content-center mt--300">
          <div class="col-lg-12">
            <card gradient="secondary" shadow body-classes="p-lg-5">
              <h3 class="mb-1">음악을 올려주세요!</h3>
              <h6 class="mt-4">제목</h6>
              <base-input
                v-model="title"
                alternative
                placeholder="제목"
                addon-left-icon="ni ni-album-2"
              >
              </base-input>
              <h6 class="mt-4">설명</h6>
              <base-input class="mb-4">
                <textarea
                  v-model="description"
                  class="form-control form-control-alternative"
                  name="name"
                  rows="16"
                  cols="80"
                  placeholder="음악 설명"
                ></textarea>
              </base-input>
              <h6 class="mt-4">특징 ( 3개 입력 )</h6>
              <div class="row">
                <base-input
                  v-model="tag_1"
                  class="col-lg-4 bg-secondary my-1"
                  style="box-shadow:0 0"
                  addon-left-icon="ni ni-tag"
                  alternative
                  placeholder="특징 1"
                >
                </base-input>
                <base-input
                  v-model="tag_2"
                  class="col-lg-4 bg-secondary my-1"
                  style="box-shadow:0 0"
                  alternative
                  placeholder="특징 2"
                  addon-left-icon="ni ni-tag"
                >
                </base-input>
                <base-input
                  v-model="tag_3"
                  class="col-lg-4 bg-secondary my-1"
                  style="box-shadow:0 0"
                  alternative
                  placeholder="특징 3"
                  addon-left-icon="ni ni-tag"
                >
                </base-input>
              </div>
              <h6 class="mt-4">음악</h6>
              <base-input
                class="mb-3"
                type="file"
                alternative
                placeholder="music"
                addon-left-icon="ni ni-headphones"
                @change="getChangeValue"
              >
              </base-input>
              <base-button
                @click="submitHandler"
                type="default"
                round
                block
                size="lg"
              >
                음악 올리기
              </base-button>
            </card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import api from "@/utils/api";
import Axios from "axios";
export default {
  data() {
    return {
      title: "",
      description: "",
      tag_1: "",
      tag_2: "",
      tag_3: ""
    };
  },
  methods: {
    getChangeValue(e) {
      this.uploadData = e.target.files[0];
    },
    async submitHandler() {
      try {
        const keyUrl = await api.post("/api/beat/gets3path", {
          file_type: this.uploadData.type,
          music_title: this.title
        });
        const s3Result = await Axios.put(keyUrl.data.url, this.uploadData, {
          headers: {
            "Content-Type": "audio/mpeg"
          }
        });
        if (s3Result.status !== 200) {
          const err = new Error("error while get data");
          err.response.data.message = "error while upload to s3";
          throw err;
        }
        const writeDbResult = await api.post("/api/beat/write",{
          music_path : "https://biphop-audio.s3.ap-northeast-2.amazonaws.com/" +keyUrl.data.key,
          music_title : this.title,
          music_description : this.description,
          music_tag_1 : this.tag_1,
          music_tag_2 : this.tag_2,
          music_tag_3 : this.tag_3
        });
      } catch (err) {
        if (err.response !== undefined) {
          alert(err.response.data.message);
        }
        console.log(err);
      }
    }
  }
};
</script>
