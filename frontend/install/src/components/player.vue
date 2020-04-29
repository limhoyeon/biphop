<template>
<div class="main">
    <newEqaulRegionsComponent v-if="equalRegions" :wavesurfer="wavesurfer"></newEqaulRegionsComponent>
    <div ref="waveform" class="waveform" />
    <div class="controll-bar">
        <button v-show="!isStart" @click="startHandler" class="play"><img src="../assets/play.png" /></button>
        <button v-show="isStart" @click="pauseHandler" class="pause"><img src="../assets/pause.png" /></button>
        <button @click="stopHandler"><img src="../assets/stop.png" /></button>
        <button @click="eqaulRegionsSettingHandler">eqq</button>
        <h3>{{time | round}} / {{totalTime | round}}</h3>
    </div>
</div>
</template>

<script>
import test from '../assets/rock.mp3';
import WaveSurfer from 'wavesurfer.js';
import CursorPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.cursor.min.js'
import RegionsPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.regions.min.js'
import newEqaulRegions from './newEqaulRegions.vue'
export default {
    data() {
        return {
            equalRegions:false,
            isStart: false,
            time: 0,
            totalTime: 0,
            wavesurfer:null
        }
    },
    components:{
      newEqaulRegionsComponent:newEqaulRegions  
    },
    mounted() {
        this.wavesurfer = WaveSurfer.create({
            container: this.$refs.waveform,
            backgroundColor: '#FFFFFF',
            cursorColor: "#ff002b",
            cursorWidth: "1",
            waveColor: "#c3e0e8",
            height: document.documentElement.clientWidth / 100 * 10,
            plugins: [
                CursorPlugin.create({
                    container: this.$refs.waveform,
                    showTime: true,
                    opacity: 0.2,
                    customShowTimeStyle: {
                        'background-color': '#000',
                        color: '#fff',
                        padding: '1vw',
                        'font-size': '2vw'
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
        this.wavesurfer.load(test);
    },
    filters: {
        round(number) {
            return number.toFixed(3)
        }
    },
    methods: {
        getTotalTime() {
            return this.wavesurfer.getDuration();
        },
        eqaulRegionsSettingHandler(){
            this.equalRegions=true;
        },
        startHandler() {
            this.currentTimeEvent = setInterval(() => {
                this.time = this.wavesurfer.getCurrentTime()
            }, 1);
            this.wavesurfer.play();
            this.isStart = true;
        },
        pauseHandler() {
            this.wavesurfer.pause();
            this.isStart = false;
            clearTimeout(this.currentTimeEvent)
        },
        stopHandler() {
            this.wavesurfer.stop();
            this.isStart = false;
        }
    }
}
</script>

<style scoped>
.waveform {
    position: relative;
}

.controll-bar {
    display: flex;
    justify-content: center;
    align-items: center;
}

.controll-bar button {
    background-color : white;
    display: flex;
    width: 10vw;
    height: 10vw;
    padding: 0 1vw;
    border: 0;
}

.controll-bar button:focus {
    outline: 0;
    opacity: 1.0;
}

.controll-bar button:active {
    transform: translateY(0.2vw);
    opacity: 0.6
}

.controll-bar img {
    width: 100%;
    height: auto;
}

.controll-bar h3 {
    font-size: 4vw;
    margin: 0;
}

.main {
    margin: 0 auto 0 auto;
}
</style>
