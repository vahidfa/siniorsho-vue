import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuelidate from 'vuelidate'
import firebase from 'firebase'
Vue.use(vuelidate)
Vue.use(firebase)
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: 'AIzaSyAvrhur9zo94x9ru_WFaR0-b8uthLGdlaM',
  authDomain: 'sinior-419e5.firebaseapp.com',
  databaseURL: 'https://sinior-419e5.firebaseio.com',
  projectId: 'sinior-419e5',
  storageBucket: 'sinior-419e5.appspot.com',
  messagingSenderId: '50014410981',
  appId: '1:50014410981:web:b40ad2277747e5e1631c0c'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
