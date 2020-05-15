<template>
<div class="list-container bg-gradient-warning">
    <h6 class="display-4">Play-List</h6>
    <div class="list-item-container">
        <div class="list-item">
            <h1 class="display-4">Title<br>이여요~~-가수이름이ssssssssssss용~</h1>
        </div>
        <div class="list-item">
            <h1 class="display-4">Title<br>이여요~~-가수이름이ssssssssssss용~</h1>
        </div>
        <div class="list-item">
            <h1 class="display-4">Title<br>이여요~~-가수이름이ssssssssssss용~</h1>
        </div>
        <div class="list-item">
            <h1 class="display-4">Title<br>이여요~~-가수이름이ssssssssssss용~</h1>
        </div>
        <div class="list-item active bg-gradient-primary">
            <h1 class="display-4">Title<br>이여요~~-가수이름이ssssssssssss용~</h1>
        </div>
    </div>
</div>
</template>

<script scoped>

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
    border: 5px solid# f1f1f1;
    z-index: 9999;
    border-radius:1rem;
}

.list-container h6 {
    text-align: left;
    color: white;
    font-size: 1.5rem;
    border-bottom: 0.3rem solid black;
}

.list-item-container .list-item {
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
