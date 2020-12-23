import Vue from 'vue'
import App from './App.vue'

import 'document-register-element/build/document-register-element'

import router from './router'
import store from './store/index'

import vueCustomElement from 'vue-custom-element'

Vue.use(vueCustomElement)

App.store = store
App.router = router

Vue.customElement('vue-widget', App)