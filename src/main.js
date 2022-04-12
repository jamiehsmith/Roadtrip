import Vue from 'vue';
import App from './App.vue';
import Element from 'element-ui';
import VueRouter from 'vue-router';
import Dashboard from './components/Dashboard';
import Map from './components/Map';
import Garage from './components/Garage';
import Inventory from './components/Inventory';
import Pools from './components/Pools';
import PrizeGames from './components/PrizeGames';
import Marketplace from './components/Marketplace';
import GameHistory from './components/GameHistory';

Vue.config.productionTip = false;

Vue.use(Element);
Vue.use(VueRouter);

const routes = [
  { path: '/dashboard', alias: '/', component: Dashboard },
  { path: '/map', component: Map },
  { path: '/garage', component: Garage },
  { path: '/inventory', component: Inventory },
  { path: '/pools', component: Pools },
  { path: '/prize-games', component: PrizeGames },
  { path: '/marketplace', component: Marketplace },
  { path: '/game-history', component: GameHistory },
];

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
