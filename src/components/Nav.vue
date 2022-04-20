<template>
  <el-row class="nav-bar">
    <el-col :span="24">
      <h5 class="title">
        <div class="hashtag">#</div>
        Road Trip
      </h5>
      <el-menu
        default-active="2"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true"
      >
        <el-menu-item
          :class="{ active: isActiveTab('dashboard') }"
          index="dashboard"
        >
          <i class="el-icon-menu"></i>
          <span>Dashboard</span>
        </el-menu-item>
        <el-menu-item :class="{ active: isActiveTab('map') }" index="map">
          <i class="el-icon-menu"></i>
          <span>Map</span>
        </el-menu-item>
        <el-menu-item :class="{ active: isActiveTab('garage') }" index="garage">
          <i class="el-icon-menu"></i>
          <span>Garage</span>
        </el-menu-item>
        <el-menu-item
          :class="{ active: isActiveTab('inventory') }"
          index="inventory"
        >
          <i class="el-icon-menu"></i>
          <span>Inventory</span>
        </el-menu-item>
        <el-menu-item :class="{ active: isActiveTab('pools') }" index="pools">
          <i class="el-icon-menu"></i>
          <span>Pools</span>
        </el-menu-item>
        <el-menu-item
          :class="{ active: isActiveTab('prize-games') }"
          index="prize-games"
        >
          <i class="el-icon-menu"></i>
          <span>Prize Games</span>
        </el-menu-item>
        <el-menu-item
          :class="{ active: isActiveTab('marketplace') }"
          index="marketplace"
        >
          <i class="el-icon-menu"></i>
          <span>Marketplace</span>
        </el-menu-item>
        <el-menu-item
          :class="{ active: isActiveTab('game-history') }"
          index="game-history"
        >
          <i class="el-icon-menu"></i>
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
}

.el-menu {
  background-color: #1f1d2b !important;
  .el-menu-item {
    text-align: initial;
    font-size: 16px;
    padding-left: 25px !important;
    margin: 0 15px 0 15px;
    border-radius: 8px;
    &:not(.active) {
      background-color: #1f1d2b !important;
    }
    &.active {
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
