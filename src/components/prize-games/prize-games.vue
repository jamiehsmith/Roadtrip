<template>
  <div class="prize-games__wrapper">
    <TitleHeader title="Prize Games" :userAddress="userAddress" />
  </div>
</template>

<script>
import TitleHeader from '../../components/shared/title-header';

export default {
  name: 'PrizeGames',

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
.prize-games__wrapper {
  padding-left: 37px;
}
</style>
