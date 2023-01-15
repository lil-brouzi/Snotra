import { createApp } from 'vue';
import App from './App';
import router from '@/router/router';
import Components from '@/Components/';
import Store from '@/Store';

const app = createApp(App)

Components.forEach(component => {
    app.component(component.name, component)
})

app.use(Store).use(router).mount('#app')
