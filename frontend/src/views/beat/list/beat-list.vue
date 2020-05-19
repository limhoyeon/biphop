<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-dark shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-6">
                <h1 class="display-3  text-white">
                  좋은 사람들과, 좋은 음악을..
                </h1>
                <p class="lead  text-white">
                  Bip Hop은 음악을 만들고 싶은 사람과 하고 싶은 사람을
                  연결해주는 세계입니다. 지금 당장 들어보세요!!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 1st Hero Variation -->
    </div>
    <section class="section section-lg pt-lg-0 mt--200">
      <div class="container">
        <div class="row justify-content-center" style="margin-top:15rem; margin-bottom:5rem">
            <div class="col-lg">
                <div class="row row-grid">
                    <div class="col-lg-12 text-center v">
                        <h1 class="text-warning" style="font-size:4rem">새로 추가된 음악</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center py-3">
          <div class="col-lg-12">
            <div class="row row-grid">
              <beat-card-component></beat-card-component>
              <beat-card-component></beat-card-component>
              <beat-card-component></beat-card-component>
              <beat-card-component></beat-card-component>
              <beat-card-component></beat-card-component>
              <beat-card-component></beat-card-component>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import beatCardComponent from "./components/beat-card.vue";

export default {
  components: {
    beatCardComponent
  }
};
</script>
