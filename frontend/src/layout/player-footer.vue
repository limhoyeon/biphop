<template>
<div class="player-footer bg-gradient-success">
    <div class="row align-items-center" style="height:3rem">
        <div class="col-3 p-0">
            <div style="display:flex; justify-content:flex-end">
                <base-button class="bg-gradient-warning" size="sm" type="success" icon="ni ni-bold-left"></base-button>
                <base-button v-if="isStart" @click="pauseHandler" size="sm" class="bg-gradient-primary" type="second" icon="ni ni-button-pause"></base-button>
                <base-button v-else @click="startHandler" size="sm" class="bg-gradient-primary" type="success" icon="ni ni-button-play"></base-button>
                <base-button class="bg-gradient-warning" size="sm" type="success" icon="ni ni-bold-right"></base-button>
                <base-button class="bg-dark" @click="volumeController" size="sm" type="success" icon="fa fa-volume-up"></base-button>
                <span class="px-3">{{time | round}}</span>
            </div>
        </div>
        <div class="col-5 p-0">
            <div ref="waveform" class="waveform" />
        </div>
        <div class="col-4 p-0 text-left" style="display:flex;align-items:center">
            <span class="px-3">{{totalTime | round}}</span>
            <h1 class="display-4 m-0" style="width:14rem;display:inline;font-size:0.8rem;color:pink;white-space: nowrap;text-overflow: ellipsis; overflow: hidden;
">title - {{getNowPlayInfo.music_title}}<br>artist - {{getNowPlayInfo.nickname}}</h1>
            <base-button @click="listController" class="bg-gradient-danger mx-3" size="sm" type="success" icon="ni ni-bullet-list-67"></base-button>
        </div>
    </div>
    <player-footer-list-component v-if="listShow" @click="listController"></player-footer-list-component>
    <player-footer-volume-component :setVolumeHandler="setVolumeHandler" v-if="volumeShow"></player-footer-volume-component>
</div>
</template>

<script>
import WaveSurfer from 'wavesurfer.js';
import CursorPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.cursor.min.js'
import RegionsPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.regions.min.js'
import playerFooterListComponent from './components/player-footer-list.vue'
import playerFooterVolumeComponent from './components/player-footer-volume.vue'
import {mapActions,mapGetters} from 'vuex'
export default {
    data() {
        return {
            isStart: false,
            time: 0,
            totalTime: 0,
            wavesurfer: null,
            volumeShow : false,
            listShow : false
        }
    },
    components:{
        playerFooterListComponent,
        playerFooterVolumeComponent
    },
    computed:{
        ...mapGetters(['getNowPlayInfo'])
    },
    watch:{
        getNowPlayInfo(){
            this.isStart = false;
        }
    },
    mounted() {
        this.wavesurfer = WaveSurfer.create({
            hideScrollbar: true,
            container: this.$refs.waveform,
            cursorColor: "#ff002b",
            cursorWidth: "1",
            waveColor: "white",
            height: "32",
            plugins: [
                CursorPlugin.create({
                    container: this.$refs.waveform,
                    showTime: true,
                    opacity: 0.2,
                    customShowTimeStyle: {
                        'background-color': '#000',
                        color: '#fff',
                        padding: '0.2rem',
                        'font-size': '1rem'
                    }
                }),
                RegionsPlugin.create({
                    container: this.$refs.waveform
                })
            ]
        })
        this.wavesurfer.on('ready', () => {
            this.totalTime = this.getTotalTime()
            this.currentTimeEvent = setInterval(() => {
                this.time = this.wavesurfer.getCurrentTime()
            }, 1);
        });
        this.setWaveSurferProcess(this.wavesurfer);
    },
    filters: {
        round(number) {
            return number.toFixed()
        }
    },
    methods: {
        setVolumeHandler(val){
            this.wavesurfer.setVolume(val/100);
        },
        getTotalTime() {
            return this.wavesurfer.getDuration();
        },
        startHandler() {
            this.wavesurfer.play();
            this.isStart = true;
            this.currentTimeEvent = setInterval(() => {
                this.time = this.wavesurfer.getCurrentTime()
                if(this.totalTime-this.time<0.1){
                    this.isStart=false;
                    this.wavesurfer.pause();
                }
            }, 1000);
        },
        pauseHandler() {
            this.wavesurfer.pause();
            this.isStart = false;
            clearTimeout(this.currentTimeEvent)
        },
        stopHandler() {
            this.wavesurfer.stop();
            this.isStart = false;
        },
        listController(){
            this.listShow=!this.listShow;
        },
        volumeController(){
            this.volumeShow=!this.volumeShow;
        },
        ...mapActions(["setWaveSurferProcess","initPlaylistProcess"])
    }
}
</script>

<style scoped>
.player-footer {
    height: 3rem;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 9998;
    width: 100%;
    text-align: center;
}
</style>
