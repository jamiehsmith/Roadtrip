<template>
  <div class="tile" :style="{ height: `${size}px`, width: `${size}px` }" />
</template>

<script>
export default {
  name: 'Tile',

  props: {
    size: {
      type: Number,
      default: 80,
    },
  },

  data() {
    return {};
  },

  computed: {},
};
</script>

<style lang="scss" scoped>
.tile {
  background: #2e354b;
  border-radius: 8px;
}
</style>
