<template>
  <div class="col-lg-4">
    <card class="border-0" hover shadow body-classes="py-5">
      <icon name="ni ni-planet" type="warning" rounded class="mb-4"></icon>
      <h6 class="text-warning text-uppercase">{{beatCardData.music_title}}</h6>
      <p class="description mt-3" type="secondary">
        {{beatCardData.nickname}}<br>
        {{beatCardData.created_dt}}
      </p>
      <div>
        <badge type="warning" rounded v-if="beatCardData.music_tag_1!==undefined">{{beatCardData.music_tag_1}}</badge>
        <badge type="warning" rounded v-if="beatCardData.music_tag_2!==undefined">{{beatCardData.music_tag_2}}</badge>
        <badge type="warning" rounded v-if="beatCardData.music_tag_3!==undefined">{{beatCardData.music_tag_3}}</badge>
      </div>
      <base-button tag="a" @click.native="listenHandler" type="warning" class="mt-4"
        >들어 보기</base-button>
      <base-button tag="a" @click.native="detailHandler" type="warning" class="mt-4"
        >설명 보기</base-button>
    </card>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  props:{
    beatCardData : Object
  },
  methods:{
    detailHandler(){
      this.$router.push({path:"/beat/detail/"+this.music_idx})
    },
    listenHandler(){
      this.addPlaylistProcess(this.beatCardData);
    },
    ...mapActions(['addPlaylistProcess'])
  }
}
</script>