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
});

function revertString(value) {

    if (!value) {
        return value;
    }

    return value.split('').reverse().join('')
}

Vue.filter('formatMoney', function (value) {
    if (typeof value !== 'number') {
        return value;
    }

    var valueAsArray = (value + '').split('.');
    const valueHasDecimals = valueAsArray.length > 1;
    const decimals = valueHasDecimals ? ',' + valueAsArray.pop() : '';
    var integerPartOfValue = valueAsArray.shift();

    return revertString(revertString(integerPartOfValue).replace(/(.{3})(.{1})/g, '$1 $2')) + decimals;
});

Vue.filter('ISOStringToDateString', function (value) {
    return value.split('T')[0];
});

const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

// Vue Material Datepicker config to start week in datepicker with, in this case, monday
app.$material.locale.firstDayOfAWeek = 1; 
