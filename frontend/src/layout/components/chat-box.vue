<template>
<div class="chat-box bg-gradient-primary">
    <h1>chatting-box</h1>
    <chatListComponent />
    <chatDetailComponent />
</div>
</template>
<script>
import chatDetailComponent from "@/layout/components/chat-detail";
import chatListComponent from "@/layout/components/chat-list";
export default{
    components:{
        chatDetailComponent,
        chatListComponent
    }
}
</script>
<style scoped>
.chat-box{
    padding: 1rem;
    height: 70%;
    width: 30%;
    position: fixed;
    top: 4rem;
    left: 2rem;
    border: 5px solid #f1f1f1;
    z-index: 9999;
    border-radius:1rem;
    overflow-y:scroll
}
</style>