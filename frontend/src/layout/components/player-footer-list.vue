<template>
<div class="list-container bg-gradient-warning">
    <h6 class="display-4">Play-List</h6>
    <div class="list-item-container">
        <div  v-for="(item,index) in getPlaylist" :key="index" 
        class="list-item" 
        @click="selectHandler(index)"
        :class='[getNowPlay===index ? "active" : "",getNowPlay===index ? "bg-gradient-primary" : ""]'
        >
            <h1 class="display-4">{{item.music_title}}<br>{{item.nickname}}</h1>
        </div>
    </div>
</div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
export default{
    computed : {
        ...mapGetters(['getPlaylist','getNowPlay'])
    },
    methods:{
        selectHandler(index){
            this.setNowPlayProcess(index);
        },
        ...mapActions(['setNowPlayProcess'])
    }
}
</script>

<style scoped>
.list-container h6{
    margin:0;
    padding:0;
}
.list-container {
    padding: 1rem;
    height: 70%;
    width: 30%;
    position: fixed;
    bottom: 4rem;
    right: 1rem;
    border: 5px solid #f1f1f1;
    z-index: 9999;
    border-radius:1rem;
    overflow-y:scroll
}

.list-container h6 {
    text-align: left;
    color: white;
    font-size: 1.5rem;
    border-bottom: 0.3rem solid black;
}

.list-item-container .list-item {
    margin-top:0.1rem;
    padding-bottom:0.1rem;
    padding-left:0.2rem;
    border-bottom: 1px solid white;

}
.list-item-container .list-item{
    cursor:pointer;
}
.list-item-container .list-item h1 {
    padding:0;
    margin:0;
    text-align: left;
    width: 14rem;
    font-size: 0.8rem;
    color: pink;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.list-item-container .active h1{
    color: white;
}
</style>
