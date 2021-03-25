import Vue from 'vue';
import VueRouter from 'vue-router';
import Ripple from 'vue-ripple-directive';
import VuePlyr from 'vue-plyr';
import VueTippy from "vue-tippy";
import routes from './routes';
import App from './App.vue';

import "./css/grid/bootstrap-grid.min.css";
import "./css/style.css";
import "./assets/icons/all.min.css";
import 'vue-plyr/dist/vue-plyr.css';

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.directive('ripple', Ripple);
Vue.use(VueRouter);
Vue.use(VueTippy);
Vue.use(VuePlyr);

let Router = new VueRouter({
    mode: 'history',
    routes: routes
});

new Vue({
    router: Router,
    render: h => h(App),
}).$mount('#app');

