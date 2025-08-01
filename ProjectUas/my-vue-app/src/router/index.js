import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import UserList from '../views/UserList.vue';
import AddUser from '../views/AddUser.vue';
import EditUser from '../views/EditUser.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/users',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/users/add',
    name: 'AddUser',
    component: AddUser
  },
  {
    path: '/users/edit/:id',
    name: 'EditUser',
    component: EditUser,
    props: true
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
