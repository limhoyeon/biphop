<template>
    <div class="pop-up bg-gradient-success">
        <base-button @click="addUserHandler" type="warning" icon="ni ni-bag-17">유저 추가</base-button>
        <base-button @click="sendHandler" type="warning" icon="ni ni-bag-17">생성</base-button>
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
            prompt("채팅방에 추가할 유저를 선택해주세요!");
        },
        sendHandler(){
            api.get("/api/user/check",{
                params:{
                    user_id:"guestid"
                }
            })
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