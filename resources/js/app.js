require('./bootstrap');
import Vue from 'vue';
import vuetify from './plugins/vuetify' // path to vuetify export

Vue.component('data-table', require('./components/FullTable.vue').default);

const app = new Vue({
    el: '#app',
    vuetify
});


// new Vue({
//     vuetify,
// }).$mount('#app')
