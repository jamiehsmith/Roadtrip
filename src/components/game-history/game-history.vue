<template>
  <div class="game-history__wrapper">
    <TitleHeader title="Game History" :userAddress="userAddress" />
  </div>
</template>

<script>
import TitleHeader from '../../components/shared/title-header';

export default {
  name: 'GameHistory',

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
.game-history__wrapper {
  padding-left: 37px;
}
</style>
