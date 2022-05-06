<template>
  <div class="marketplace__wrapper">
    <TitleHeader title="Marketplace" :userAddress="userAddress" />
  </div>
</template>

<script>
import TitleHeader from '../../components/shared/title-header';

export default {
  name: 'Marketplace',

  components: {
    TitleHeader,
  },

  props: {
    userAddress: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.marketplace__wrapper {
  padding-left: 37px;
}
</style>
