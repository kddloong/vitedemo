import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { router } from './router/index';
import store from './store';
import {
  ElButton,
  ElSelect,
  ElAside,
  ElContainer,
  ElMain,
  ElHeader,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElTable,
  ElTableColumn,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElCollapseTransition,
  ElRow,
  ElCol,
  ElCard,
  ElInput,
} from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App);

app.use(router);

const components = [
  ElButton,
  ElSelect,
  ElAside,
  ElContainer,
  ElMain,
  ElHeader,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElTable,
  ElTableColumn,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElCollapseTransition,
  ElRow,
  ElCol,
  ElCard,
  ElInput,
];

components.forEach(component => {
  app.component(component.name, component);
});

app.use(store);

app.mount('#app');
