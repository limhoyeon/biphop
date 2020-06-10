<template>
    <div class="pop-up bg-gradient-success">
        <base-button @click="addUserHandler" type="warning" icon="ni ni-bag-17">유저 추가</base-button>
        <base-button @click="createRoomHandler" type="warning" icon="ni ni-bag-17">생성</base-button>
        <div class="row m-3" v-for="(user,index) in users" :key="index">
            <div class="col">
                <base-button type="primary" size="sm">{{user}}</base-button>
            </div>
            <div class="col">
                <base-button type="warning" @click="delectClick(index)" size="sm">삭제</base-button>
            </div>
        </div>
    </div>

</template>

<script>
import api from '@/utils/api'
export default {
    props:{
        socket:Object
    },
    data(){
        return{
            users : []
        }
    },
    methods:{
        addUserHandler(){
            let temp_id=prompt("채팅방에 추가할 유저를 선택해주세요!");
            api.get("/api/chat/check",{
                params:{
                    user_id: temp_id
                }
            })
            .then(res=>{
                if(res.data.resultCode===1){
                    this.users.push(temp_id);
                }
                else{
                    alert("존재하지 않는 유저입니다.")
                }
            })
            .catch(err=>{
                console.log(err)
            })
        },
        delectClick(index){
            this.users.splice(index,1);
        },
        createRoomHandler(){
            if(this.users.length<2){
                alert("두명이상 선택해주세요");
            }
            else{
                api.post("/api/chat/room",{
                    users : this.users
                })
                .then(res=>{
                    if (res.data.resultCode===0 ){
                        alert("추가되었습니다.");
                        this.socket.emit("roomMake",this.users)
                        this.users=[];
                        this.$parent.getList();
                    }
                })
            }
        }
    }
}
</script>
<style scoped>
.pop-up{
    padding: 1rem;
    height: 20rem;
    width: 30%;
    position: fixed;
    top: 4rem;
    left: 27rem;
    border: 5px solid #f1f1f1;
    z-index: 9999;
    border-radius:1rem;
    overflow-y:scroll
}
</style>