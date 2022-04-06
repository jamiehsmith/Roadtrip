<template>
  <div id="app">
    <Game v-if="isLoggedIn" :userAddress="userAddress" />
    <div v-else class="login">
      <el-button @click="showMetamaskWindow = true">
        <img class="metamask-logo" src="./assets/metamask.png" />
        Login to Metamask
      </el-button>
      <vue-metamask
        v-if="showMetamaskWindow"
        @onComplete="metamaskLogin"
      />
    </div>
  </div>
</template>

<script>
import Game from './components/Game.vue';
import VueMetamask from 'vue-metamask';

export default {
  name: 'App',
  components: {
    Game,
    VueMetamask,
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
