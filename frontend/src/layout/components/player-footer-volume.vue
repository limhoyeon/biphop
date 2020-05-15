<template>
<div class="volume-container bg-dark">
    <base-slider class="volume-slider m-0" type="secondary" v-model="volumeValue"></base-slider>
</div>
</template>
<script>
    export default {
      data() {
        return {
              volumeValue: 50
        };
      }
    };
</script>
<style scoped>
.volume-container {
    height: 5%;
    width: 30%;
    position: fixed;
    bottom: 3.5rem;
    left: 2rem;
    border: 5px solid# f1f1f1;
    z-index: 9999;
    border-radius:0.5rem;
}
.volume-container .volume-slider{
    
}
</style>
