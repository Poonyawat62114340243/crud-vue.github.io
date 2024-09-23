import { createRouter, createWebHistory } from 'vue-router';
import CrudComponent from '../components/CrudComponent.vue';
import ItemEdit from '../components/ItemEdit.vue';

const routes = [
  {
    path: '/',
    name: 'CrudComponent',
    component: CrudComponent,
  },
  {
    path: '/edit/:index',
    name: 'ItemEdit',
    component: ItemEdit,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
