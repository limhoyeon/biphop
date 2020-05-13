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
                alternative
                placeholder="제목"
                addon-left-icon="ni ni-album-2"
              >
              </base-input>
              <h6 class="mt-4">설명</h6>
              <base-input class="mb-4">
                <textarea
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
                  class="col-lg-4 bg-secondary my-1"
                  style="box-shadow:0 0"
                  addon-left-icon="ni ni-tag"
                  alternative
                  placeholder="특징 1"
                >
                </base-input>
                <base-input
                  class="col-lg-4 bg-secondary my-1"
                  style="box-shadow:0 0"
                  alternative
                  placeholder="특징 2"
                  addon-left-icon="ni ni-tag"
                >
                </base-input>
                <base-input
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
              >
              </base-input>
              <base-button type="default" round block size="lg">
                음악 올리기
              </base-button>
            </card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
