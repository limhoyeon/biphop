<template>
<div class="bg-gradient-primary">
    <div class="chatter" v-for="(item,index) in chattingList" :key="index">
        <span style="color:white">{{item.msg}} from</span><span style="color:purple"> {{item.from.user_id}}</span>
    </div>
    <form @keyup.enter="sendHandler">
        <textarea v-model="message" class="form-control"  rows="2" placeholder="Write a large text here ..."></textarea>
    </form>
</div>
</template>
<script>
import io from 'socket.io-client';
import {mapGetters} from 'vuex';
export default{
    data(){
        return{
            chattingList : [],
            message : ""
        }
    },
    props:{
        chatroom:String
    },
    watch:{
        chatroom(prev,next){
            this.socket.emit('leave',{});
            this.socket.emit('join',{
                chatroom: this.chatroom
            })
        }
    },
    methods:{
        sendHandler(){
            if(this.message!==""){
                this.chattingList.push({msg : this.message, from:{ user_id:"나" }});
                this.socket.emit("chat",{
                    msg:this.message
                })
                this.message="";
            }
        }
    }
}
</script>
<style scoped>
.form-control{
    position: fixed;
    width: 30%;
    left : 2rem;
    top: 46.5rem;
    border-radius:1rem;
}
</style>