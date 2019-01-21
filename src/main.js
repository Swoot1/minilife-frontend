import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false

Vue.use(VueMaterial)

axios.defaults.baseURL = 'http://localhost:3000';
//axios.defaults.headers.get['Accepts'] = 'application/json';

Vue.filter('actionToText', function (value) {
    switch (value) {
        case 'SOLD_IT':
            return 'Sold it'
        case 'GAVE_IT_AWAY':
            return 'Gave it away'
        case 'THREW_IT':
            return 'Threw it'
        case 'PURCHASED_IT':
            return 'Purchased it'
        default:
            return 'Unknown';
    }
})

const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

// Vue Material Datepicker config to start week in datepicker with, in this case, monday
app.$material.locale.firstDayOfAWeek = 1; 
