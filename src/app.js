import Vue from 'vue'
import Button from "./Button";
import Icon from "./Icon";
Vue.component('my-button',Button);
Vue.component('my-icon',Icon);

new Vue({
    el:'#app',
    data(){
        return{
            loading1:false,
        }
    }
})