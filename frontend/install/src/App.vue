<template>
<div>
  <playerComponent class="footer"></playerComponent>
</div>
</template>

<script>
import player from './components/player';

export default {
  name: 'App',
  components: {
    playerComponent:player,
  }
};
</script>
<style>
.footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: white;
   text-align: center;
}
</style>
