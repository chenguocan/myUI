import Vue from 'vue'
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
Vue.component('my-button',Button);
Vue.component('my-button-group',ButtonGroup);

new Vue({
    el:'#app',
    data(){
        return{
            loading1:false,
        }
    }
})
