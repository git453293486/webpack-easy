import '../css/index.scss';

import 'swiper/dist/css/swiper.css';
import Swiper from 'swiper'

import Vue from 'vue'

window.onload=function(){
    new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        speed:1000,
        autoplay : {
            delay:2500,
            disableOnInteraction: false,
        },
        // 如果需要分页器
        pagination: {
        el: '.swiper-pagination',
        },
    })
}

var app = new Vue({
    el:'#index',
    data(){
        return {
            ind:0,
            indtwo:0,
            indthree:0,
            news:['今日活动','视频'],
            newgametab:['新游','热门','公益服'],
            openmeter:['开测表','开服表']
        }
    },
    methods:{
        todayNews:function(index){
            this.ind = index;
        },
        newGame:function(index){
            this.indtwo = index;
        },
        opac:function(index){
            this.indthree = index;
        },
    },
    mounted() {
        
    },



})
