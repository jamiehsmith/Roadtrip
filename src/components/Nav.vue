<template>
  <el-row class="nav-bar">
    <el-col :span="24">
      <a href="/">
        <h5 class="title">
          <div class="hashtag">#</div>
          Road Trip
        </h5>
      </a>
      <el-menu
        default-active="2"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true"
      >
        <el-menu-item
          :class="{ active: isActiveTab('dashboard') }"
          index="dashboard"
        >
          <font-awesome-icon
            class="nav-icon"
            icon="fa-solid fa-gauge-simple-high"
          />
          <span>Dashboard</span>
        </el-menu-item>
        <el-menu-item :class="{ active: isActiveTab('map') }" index="map">
          <font-awesome-icon class="nav-icon" icon="fa-solid fa-map" />
          <span>Map</span>
        </el-menu-item>
        <el-menu-item :class="{ active: isActiveTab('garage') }" index="garage">
          <font-awesome-icon
            class="nav-icon"
            icon="fa-solid fa-square-parking"
          />
          <span>Garage</span>
        </el-menu-item>
        <el-menu-item
          :class="{ active: isActiveTab('inventory') }"
          index="inventory"
        >
          <font-awesome-icon
            class="nav-icon"
            icon="fa-solid fa-boxes-stacked"
          />
          <span>Inventory</span>
        </el-menu-item>
        <el-menu-item :class="{ active: isActiveTab('pools') }" index="pools">
          <font-awesome-icon class="nav-icon" icon="fa-solid fa-coins" />
          <span>Pools</span>
        </el-menu-item>
        <el-menu-item
          :class="{ active: isActiveTab('prize-games') }"
          index="prize-games"
        >
          <font-awesome-icon class="nav-icon" icon="fa-solid fa-trophy" />
          <span>Prize Games</span>
        </el-menu-item>
        <el-menu-item
          :class="{ active: isActiveTab('marketplace') }"
          index="marketplace"
        >
          <font-awesome-icon class="nav-icon" icon="fa-solid fa-store" />
          <span>Marketplace</span>
        </el-menu-item>
        <el-menu-item
          :class="{ active: isActiveTab('game-history') }"
          index="game-history"
        >
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
}

.el-menu {
  background-color: #1f1d2b !important;
  width: 256px;
  .el-menu-item {
    text-align: initial;
    font-size: 16px;
    padding-left: 25px !important;
    margin: 0 15px 0 15px;
    border-radius: 8px;
    &:not(.active) {
      background-color: #1f1d2b !important;
    }
    &.active,
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
