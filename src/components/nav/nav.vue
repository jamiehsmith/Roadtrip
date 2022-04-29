<template>
  <el-row class="nav-bar">
    <el-col :span="24">
      <a href="/">
        <h5 class="title">
          <div class="hashtag">#</div>
          Road Trip
        </h5>
      </a>
      <div class="info-box">
        <div class="info-box__item top">
          <span>2nd Gear</span>
          <span>APR: 35%</span>
        </div>
        <div class="info-box__item center">$1200</div>
        <div class="info-box__item bottom">Weekly Rewards: 353 ></div>
      </div>
      <el-menu
        default-active="2"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true"
      >
        <el-menu-item
          index="dashboard"
          :class="{ 'is-active': activeTab === '/' }"
        >
          <font-awesome-icon
            class="nav-icon"
            icon="fa-solid fa-gauge-simple-high"
          />
          <span>Dashboard</span>
        </el-menu-item>
        <el-menu-item index="map">
          <font-awesome-icon class="nav-icon" icon="fa-solid fa-map" />
          <span>Map</span>
        </el-menu-item>
        <el-menu-item index="garage">
          <font-awesome-icon
            class="nav-icon"
            icon="fa-solid fa-square-parking"
          />
          <span>Garage</span>
        </el-menu-item>
        <el-menu-item index="inventory">
          <font-awesome-icon
            class="nav-icon"
            icon="fa-solid fa-boxes-stacked"
          />
          <span>Inventory</span>
        </el-menu-item>
        <el-menu-item index="pools">
          <font-awesome-icon class="nav-icon" icon="fa-solid fa-coins" />
          <span>Pools</span>
        </el-menu-item>
        <el-menu-item index="prize-games">
          <font-awesome-icon class="nav-icon" icon="fa-solid fa-trophy" />
          <span>Prize Games</span>
        </el-menu-item>
        <el-menu-item index="marketplace">
          <font-awesome-icon class="nav-icon" icon="fa-solid fa-store" />
          <span>Marketplace</span>
        </el-menu-item>
        <el-menu-item index="game-history">
          <font-awesome-icon
            class="nav-icon"
            icon="fa-solid fa-clock-rotate-left"
          />
          <span>Game History</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'dashboard',
    };
  },

  watch: {
    $route() {
      this.activeTab = this.$route.path;
    },
  },

  methods: {
    isActiveTab(tab) {
      if (this.activeTab === '/') {
        return tab === 'dashboard';
      }
      return `/${tab}` === this.activeTab;
    },
  },

  created() {
    this.activeTab = this.$route.path;
  },
};
</script>

<style lang="scss" scoped>
.nav-bar {
  width: 256px;
  height: 100vh;
  background: #1f1d2b;
  border-right: 1px solid #3C4156;
  overflow: scroll;
  .title {
    display: flex;
    font-size: 24px;
    color: #fff;
    align-items: center;
    justify-content: center;
    .hashtag {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #66b6ff;
      border-radius: 50%;
      height: 32px;
      width: 32px;
      font-size: 16px;
      margin-right: 10px;
    }
  }
  a {
    text-decoration: none;
  }
  .nav-icon {
    margin-right: 20px;
  }
  .info-box {
    height: 175px;
    background: #ffb800;
    margin: 0 12px 20px 12px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    color: #ffffff;
    font-weight: 700;
    .info-box__item {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-basis: 33.3%;
      &.top {
        justify-content: space-around;
        font-size: 16px;
      }
      &.center {
        font-size: 48px;
      }
      &.bottom {
        font-size: 16px;
      }
    }
  }
}

.el-menu {
  background-color: #1f1d2b !important;
  width: 256px;
  .el-menu-item {
    text-align: initial;
    font-size: 16px;
    padding-left: 25px !important;
    margin: 1px 15px 1px 15px;
    border-radius: 8px;
    &:not(.active) {
      background-color: #1f1d2b !important;
    }
    &.is-active {
      color: #ffd04b !important;
    }
    &.is-active,
    &:hover {
      background-color: #0d8bff !important;
      .el-icon-menu,
      span {
        color: #ffffff;
      }
    }
    i {
      margin-right: 15px;
    }
  }
}
</style>
