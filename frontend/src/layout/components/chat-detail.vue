<template>
<div class="bg-gradient-primary">
    <base-button @click="buttonClickHandler" type="warning" icon="ni ni-bag-17">목록으로 가기</base-button>
    <div class="chatter" v-for="(item,index) in chatData.chat" :key="index">
        <span style="color:white">{{item.message}} from</span><span style="color:purple"> {{item.sender}}</span>
    </div>
    <form @keyup.enter="sendHandler">
        <textarea v-model="message" class="form-control"  rows="2" placeholder="Write a large text here ..."></textarea>
    </form>
</div>
</template>
<script>
export default{
    data(){
        return{
            message : "",
        }
    },
    props:{
        chatData:Object,
        socket:Object
    },
    computed:{
        chatLength(){
            return this.chatData.chat.length
        }
    },
    watch:{
        chatLength(){
            this.$nextTick(()=>{
                this.$parent.$refs.chatDiv.scrollTop=this.$parent.$refs.chatDiv.scrollHeight
            })
        }
    },
    methods:{
        sendHandler(){
            if(this.message!=="" || this.message!==undefined){
                const chatObject={message : this.message, sender:this.$store.getters.getUserId }
                this.chatData.chat.push(chatObject);
                this.socket.emit("chat",chatObject)
                this.message="";
            }
        },
        buttonClickHandler(){
            this.$emit('buttonclick')
        }
    }
}
</script>
<style scoped>
.form-control{
    position: fixed;
    width: 24rem;
    left : 2rem;
    top: 46.5rem;
    border-radius:1rem;
}
</style>