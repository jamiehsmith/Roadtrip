<template>
  <div class="metric-box-container" :style="{ 'background-color': color }">
    <div>
      <font-awesome-icon :icon="`fa-solid ${icon}`" />
      <span class="title">{{ title }}</span>
    </div>
    <div class="number">
      {{ number }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'MetricBox',

  props: {
    icon: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    number: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: '#66B6FF',
    },
  },

  data() {
    return {};
  },

  computed: {},
};
</script>

<style lang="scss" scoped>
.metric-box-container {
  height: 115px;
  width: 174px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: bold;
  border-radius: 8px;
  .title {
    font-size: 16px;
    text-align: left;
  }
  svg {
    height: 25px;
    width: 25px;
  }
  .title,
  svg {
    padding-top: 20px;
  }
  div {
    padding-left: 20px;
  }
  div:first-of-type {
    display: flex;
    flex-direction: column;
  }
  div:last-of-type {
    padding-right: 20px;
  }
  .number {
    font-size: 48px;
  }
}
</style>
