<template>
<div class="chat-box bg-gradient-primary" ref="chatDiv">
    <h1>chatting-box</h1>
    <chatListComponent v-if="isListVisible" :socket="socket" @chatroomClick="chatroomClickHandler"/>
    <chatDetailComponent v-else :chatData="chatData" :socket="socket" @buttonclick="buttonClickHandler"/>
</div>
</template>
<script>
import io from 'socket.io-client';

import chatDetailComponent from "@/layout/components/chat-detail";
import chatListComponent from "@/layout/components/chat-list";
export default{
    created(){
        this.user_id=this.$store.getters.getUserId;
        this.socket = io('http://15.164.230.216/socket.io/');
        console.log(this.socket.connected)
        this.socket.on('connect',(err,msg)=>{
            console.log(err);
            console.log(msg);
            console.log(this.socket.connected)
        })
        this.socket.on('join',(data)=>{
            this.chatData=data;
            this.$nextTick(()=>{
                this.$refs.chatDiv.scrollTop=this.$refs.chatDiv.scrollHeight;
            })
        });
        this.socket.on('chat',(data)=>{
            this.chatData.chat.push(data)
            this.$nextTick(()=>{
                this.$refs.chatDiv.scrollTop=this.$refs.chatDiv.scrollHeight;
            })
        })
    },
    components:{
        chatDetailComponent,
        chatListComponent
    },
    data(){
        return{
            isListVisible:true,
            chatData : {
                chat:[],
                users:[]
            }
        }
    },
    destroyed() {
        this.socket.disconnect()
    },
    methods:{
        chatroomClickHandler(chatroom_id){
            this.socket.emit('join',chatroom_id);
            this.isListVisible=false;
        },
        buttonClickHandler(){
            this.socket.emit('leave');
            this.isListVisible=true;
        }
    }
}
</script>
<style scoped>
h1{
    color:white;
    text-align:center;
}
.chat-box{
    padding: 1rem;
    height: 42rem;
    width: 24rem;
    position: fixed;
    top: 4rem;
    left: 2rem;
    border: 5px solid #f1f1f1;
    z-index: 9999;
    border-radius:1rem;
    overflow-y:scroll
}
</style>