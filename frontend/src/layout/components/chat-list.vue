<template>
<div>
    <base-button type="warning" icon="ni ni-bag-17">채팅추가하기</base-button>
    <div class="chatter" v-for="(item,index) in chatList" :key=index @click="clickHandler(item.chatroom_id)">
    <span v-for="(user,userIndex) in item.users" :key="userIndex">:: {{user}} ::</span>
    <span>의 채팅방</span>
    </div>
    <chatNewPopup v-if="isPopupVisible" />
</div>
</template>
<script>
import api from "@/utils/api"
import axios from 'axios'
import chatNewPopup from "@/layout/components/chat-new-popup"
export default{
    components:{
        chatNewPopup
    },
    data(){
        return{
            isPopupVisible : true,
            chatList:[]
        }
    },
    mounted(){
        api.get("/api/chat/chatlist")
        .then(res=>{
            this.chatList=res.data
        })
        .catch(err=>{
            console.log(err)
        })
    },
    props:{
        socket:Object
    },
    methods:{
        clickHandler(chatroom_id){
            this.$emit('chatroomClick',chatroom_id);
        }
    }
}
</script>
<style scoped>
.chatter{
    cursor:pointer;
    padding : 1rem;
    margin:0.5rem;
    border: 5px solid #f1f1f1;
    border-radius:1rem;
}
.chatter>span{
    color:white
}
</style>