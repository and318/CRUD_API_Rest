import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyChI3uEsJxYx_dIMgNASSXFg3I1LeexWLQ",
    authDomain: "m5-vue-test.firebaseapp.com",
    databaseURL: "https://m5-vue-test.firebaseio.com",
    projectId: "m5-vue-test",
    storageBucket: "m5-vue-test.appspot.com",
    messagingSenderId: "283643295438",
    appId: "1:283643295438:web:2fe8f5026f92d7a3c8829f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
