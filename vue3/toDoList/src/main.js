import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
//vue2
// const app = new Vue(options)
// Vue.use(插件)
// app.$mount("#app")

const app = createApp(App);
// app.use('插件')
app.mount('#app')
