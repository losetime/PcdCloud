import Vue from 'vue'
import App from './App'
import api from './static/js/api.js'

function round(number, n) {
	n = n ? parseInt(n) : 0;
	if (n <= 0) {
		return Math.round(number);
	}
	number = Math.round(number * Math.pow(10, n)) / Math.pow(10, n); //四舍五入
	number = Number(number).toFixed(n); //补足位数
	return number;
};

Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.round = round;
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
