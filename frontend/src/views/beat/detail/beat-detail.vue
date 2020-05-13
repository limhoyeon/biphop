<template>
<div class="container">
    <div class="row mt-3">
        <div class="col-lg-9 p-0">
            <h1>Hello christmas</h1>
        </div>
    </div>
    <div class="row mt-3">
        <div class="col-lg-9 p-0">
            노래!!사진!!
        </div>
    </div>
    <div class="row mt-3">
        <div class="col-lg-9 p-0">
            <p>
                descript입니다 . 설명설명설명<br />
                descript입니다 . 설명설명설명<br />
                descript입니다 . 설명설명설명<br />
                descript입니다 . 설명설명설명<br />
            </p>
        </div>
    </div>
    <div class="row mt-3">
        <badge class="col-lg-1 ml-0 my-2 mr-2" type="warning" rounded>marketing</badge>
        <badge class="col-lg-1 m-2" type="warning" rounded>product</badge>
        <badge class="col-lg-1 m-2" type="warning" rounded>launch</badge>
    </div>
    <div class="row">
        <base-button class="col-lg-3 ml-0 my-2 mr-2 " type="success">contact to artist</base-button>
        <base-button class="col-lg-3 m-2" type="warning">contact to artist</base-button>
        <base-button class="col-lg-3 m-2" type="warning">contact to artist</base-button>
    </div>
    <div class="row mt-3">
        <div class="col-lg-9 p-0 m-0">
            <base-input>
                <textarea class="form-control form-control-alternative m-0" name="name" rows="5" cols="80"></textarea>
            </base-input>
        </div>
    </div>
    <div class="row mt-2">
        <div class="list of comments"></div>
        <div class="col-lg-1 offset-lg-8">
            <base-button size="md" type="secondary">작성</base-button>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-3 p-0">
            <i class="ni ni-curved-next"></i><span style="magin:0 0.5rem"></span><h6 style="display:inline" class="name text-left">comments</h6>
        </div>
    </div>
    <div class="row comment">
        <div class="col-lg-12 p-0">
            <h6 class="name">name</h6><span></span>
            <h6 class="comment">comments!!</h6>
        </div>
    </div>
    <div class="row comment">
        <div class="col-lg-12 p-0">
            <h6 class="name">name</h6><span></span>
            <h6 class="comment">comments!!</h6>
        </div>
    </div>
    <div class="row comment">
        <div class="col-lg-12 p-0">
            <h6 class="name">name</h6><span></span>
            <h6 class="comment">comments!!</h6>
        </div>
    </div>
    <div class="row comment">
        <div class="col-lg-12 p-0">
            <h6 class="name">name</h6><span></span>
            <h6 class="comment">comments!!</h6>
        </div>
    </div>
    <div class="row comment">
        <div class="col-lg-12 p-0">
            <h6 class="name">name</h6><span></span>
            <h6 class="comment">comments!!</h6>
        </div>
    </div>
    <div class="row comment">
        <div class="col-lg-12 p-0">
            <h6 class="name">name</h6><span></span>
            <h6 class="comment">comments!!</h6>
        </div>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style>
.comment {
    margin: 1rem 0;
}

.comment span {
    margin: 0 0.8rem;
    border-right: 0.1rem solid #aeb6c2;

}

.name {
    display: inline
}

.comment {
    display: inline
}
</style>
