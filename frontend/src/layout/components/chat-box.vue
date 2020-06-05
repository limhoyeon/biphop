<template>
<div class="chat-box bg-gradient-primary">
    <h1>chatting-box</h1>
    <chatListComponent v-if="isListVisible" :socket="socket" />
    <chatDetailComponent v-else/>
</div>
</template>
<script>
import io from 'socket.io-client';

import chatDetailComponent from "@/layout/components/chat-detail";
import chatListComponent from "@/layout/components/chat-list";
export default{
    created(){
        this.user_id=this.$store.getters.getUserId;
        this.socket = io('http://localhost:3000');
        this.socket.emit("login", {
          user_id: this.user_id
        });
    },
    components:{
        chatDetailComponent,
        chatListComponent
    },
    data(){
        return{
            isListVisible:true
        }
    },
    destroyed() {
        this.socket.disconnect()
    },
}
</script>
<style scoped>
.chat-box{
    padding: 1rem;
    height: 42rem;
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