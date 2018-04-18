// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import { store } from './store'
import 'vuetify/dist/vuetify.min.css'

firebase.initializeApp({
  apiKey: 'AIzaSyAxQ8d3aDrRhl0fWBz7uw9dqapDzvFqmF8',
  authDomain: 'first-project-75825.firebaseapp.com',
  databaseURL: 'https://first-project-75825.firebaseio.com',
  projectId: 'first-project-75825',
  storageBucket: 'first-project-75825.appspot.com',
  messagingSenderId: '33085680051'
})

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
const unsubscribe = firebase.auth()
.onAuthStateChanged((user) => {
  new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
    created () {
      if (user) {
        store.dispatch('autoSignIn', user)
      }
    }
  })
  unsubscribe()
})
