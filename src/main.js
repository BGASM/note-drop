import Vue from 'vue';
import App from './App.vue';
import store from './store/store.js'


import 'es6-promise/auto'
import '@babel/polyfill';
import 'mutationobserver-shim';
import './assets/styles.css';
import './assets/basic.css';
import './plugins/bootstrap-vue';
import VueFormulate from "@braid/vue-formulate";
import "../node_modules/@braid/vue-formulate/dist/snow.min.css";
//import './assets/upload.css';
import S3UploaderPlugin from "./plugins/s3-post-upload-plugin";

Vue.config.productionTip = false
Vue.use(VueFormulate, {
  uploadUrl: "https://npehyj22hf.execute-api.us-east-2.amazonaws.com/postsig",
  plugins: [S3UploaderPlugin]
});

console.log(Vue.version);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
