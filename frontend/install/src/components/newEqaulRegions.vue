<template>
<div>
<div class="input-group mb-3">
  <div class="input-group-prepend" id="button-addon3">
    <button class="btn btn-outline-secondary" type="button">Button</button>
    <button class="btn btn-outline-secondary" type="button">Button</button>
  </div>
  <input type="text" class="form-control" placeholder="" aria-label="Example text with two button addons" aria-describedby="button-addon3">
</div>

    <div class="input-group move-time mt-3 mb-3 mr-auto ml-auto w-75">
        <div class="input-group-prepend" id="button-addon3">
            <button class="btn btn-outline-secondary" type="button">Button</button>
            <button class="btn btn-outline-secondary" type="button">Button</button>
        </div>
        <input type="text" class="form-control" placeholder="" aria-label="Example text with two button addons" aria-describedby="button-addon3">
    </div>
    <div class="input-group move-time mt-3 mb-3 mr-auto ml-auto w-75">
        <div class="input-group-prepend" id="button-addon3">
            <button class="btn btn-outline-secondary" type="button">Button</button>
            <button class="btn btn-outline-secondary" type="button">Button</button>
        </div>
        <input type="text" class="form-control" placeholder="" aria-label="Example text with two button addons" aria-describedby="button-addon3">
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            skipTime: 1,
            startTime: 0,
            endTime: 0
        }
    },
    props: {
        'wavesurfer': Object
    },
    methods: {
        hello() {
            console.log("clicked")
        }
    }
}
</script>

<style scoped>
</style>
