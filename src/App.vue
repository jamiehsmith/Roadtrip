<template>
  <div id="app">
    <div v-if="isLoggedIn" class="container">
      <Nav class="sidebar" />
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
    <div v-else class="login">
      <el-button @click="showMetamaskWindow = true">
        <img class="metamask-logo" src="./assets/metamask.png" />
        Login to Metamask
      </el-button>
      <vue-metamask v-if="showMetamaskWindow" @onComplete="metamaskLogin" />
    </div>
  </div>
</template>

<script>
import VueMetamask from 'vue-metamask';
import Nav from './components/nav/nav';

export default {
  name: 'App',
  components: {
    VueMetamask,
    Nav,
  },

  data() {
    return {
      userAddress: null,
      showMetamaskWindow: false,
    };
  },

  computed: {
    isLoggedIn() {
      return !!this.userAddress;
    },
  },
  methods: {
    metamaskLogin(data) {
      if (Object.prototype.hasOwnProperty.call(data, 'metaMaskAddress')) {
        this.userAddress = data.metaMaskAddress;
        localStorage.setItem('userAddress', this.userAddress);
      }
    },
  },

  mounted() {
    if (localStorage.getItem('userAddress')) {
      this.userAddress = localStorage.getItem('userAddress');
    }
  },
};
</script>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  display: grid;
  grid-template-columns: 256px auto;
  grid-template-areas: 'sidebar content';
  background: #252836;
}

.sidebar {
  grid-area: sidebar;
}

.content {
  grid-area: content;
}

.login {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .el-button::v-deep {
    padding: 10px;
    font-size: 14px;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .metamask-logo {
    height: 48px;
    width: 48px;
    padding-right: 15px;
  }
}
</style>

<style lang="scss">
body {
  margin: 0px;
}
</style>
