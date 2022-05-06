<template>
  <el-button>
    {{ text }}
  </el-button>
</template>

<script>
export default {
  name: 'Button',

  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.el-button {
  background: #0d8bff;
  border: none;
  color: #ffffff;
  border-radius: 8px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 140px;
}
</style>
