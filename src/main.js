import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {router} from './router/index'
import { ElButton, ElSelect } from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App);

app.use(router);
app.component(ElButton.name, ElButton);
app.component(ElSelect.name, ElSelect);


app.mount('#app')
