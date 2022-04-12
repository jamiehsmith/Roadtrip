<template>
  <el-row class="nav-bar">
    <el-col :span="12">
      <h5 class="title">
        <div class="hashtag">#</div>
        Road Trip
      </h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true"
      >
        <el-menu-item index="dashboard">
          <i class="el-icon-location"></i>
          <span>Dashboard</span>
        </el-menu-item>
        <el-menu-item index="map">
          <i class="el-icon-menu"></i>
          <span>Map</span>
        </el-menu-item>
        <el-menu-item index="garage">
          <i class="el-icon-document"></i>
          <span>Garage</span>
        </el-menu-item>
        <el-menu-item index="inventory">
          <i class="el-icon-setting"></i>
          <span>Inventory</span>
        </el-menu-item>
        <el-menu-item index="pools">
          <i class="el-icon-setting"></i>
          <span>Pools</span>
        </el-menu-item>
        <el-menu-item index="prize-games">
          <i class="el-icon-setting"></i>
          <span>Prize Games</span>
        </el-menu-item>
        <el-menu-item index="marketplace">
          <i class="el-icon-setting"></i>
          <span>Marketplace</span>
        </el-menu-item>
        <el-menu-item index="game-history">
          <i class="el-icon-setting"></i>
          <span>Game History</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
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
</style>
