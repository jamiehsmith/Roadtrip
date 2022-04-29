import Vue from 'vue';
import App from './App.vue';
import 'element-ui/lib/theme-chalk/index.css';
import Element from 'element-ui';
import VueRouter from 'vue-router';
import Dashboard from './components/dashboard/dashboard';
import Map from './components/map/map';
import Garage from './components/garage/garage';
import Inventory from './components/inventory/inventory';
import Pools from './components/pools/pools';
import PrizeGames from './components/prize-games/prize-games';
import Marketplace from './components/marketplace/marketplace';
import GameHistory from './components/game-history/game-history';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChartSimple,
  faMap,
  faSquareParking,
  faClockRotateLeft,
  faGaugeSimpleHigh,
  faBoxesStacked,
  faTrophy,
  faStore,
  faCoins,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faChartSimple,
  faMap,
  faSquareParking,
  faClockRotateLeft,
  faGaugeSimpleHigh,
  faBoxesStacked,
  faTrophy,
  faStore,
  faCoins
);

Vue.config.productionTip = false;

Vue.use(Element);
Vue.use(VueRouter);
Vue.component('font-awesome-icon', FontAwesomeIcon);

const props = {
  userAddress: localStorage.getItem('userAddress'),
}

const routes = [
  { path: '/dashboard', alias: '/', component: Dashboard, props },
  { path: '/map', component: Map, props },
  { path: '/garage', component: Garage, props },
  { path: '/inventory', component: Inventory, props },
  { path: '/pools', component: Pools, props },
  { path: '/prize-games', component: PrizeGames, props },
  { path: '/marketplace', component: Marketplace, props },
  { path: '/game-history', component: GameHistory, props },
];

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
