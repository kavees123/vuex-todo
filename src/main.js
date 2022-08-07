import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import { createPinia } from 'pinia'
createApp(App).use(store).use(createPinia()).mount('#app')
