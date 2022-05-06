<template>
  <div class="subtitle__wrapper">
    <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  name: 'Subtitle',

  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.subtitle__wrapper {
  text-align: left;
  border-bottom: 1px solid #3c4156;
  span {
    font-weight: bold;
    font-size: 22px;
  }
}
</style>
