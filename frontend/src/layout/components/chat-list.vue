<template>
<div>
    <div class="chatter">
    <span>채팅하는사람</span>
    </div>
    <div class="chatter">
    <span>채팅하는사람</span>
    </div>
    <div class="chatter">
    <span>채팅하는사람</span>
    </div>
    <div class="chatter">
    <span>채팅하는사람</span>
    </div>
    <div class="chatter">
    <span>채팅하는사람</span>
    </div>
</div>
</template>
<script>
export default{
    created(){
        this.socket.on('list',(data)=>{
            console.log(data)
        })
        this.socket.emit('list');
    },
    props:{
        socket:Object
    }
}
</script>
<style scoped>
.chatter{
    padding : 1rem;
    margin:0.5rem;
    border: 5px solid #f1f1f1;
    border-radius:1rem;
}
.chatter>span{
    color:white
}
</style>