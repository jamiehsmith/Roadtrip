<template>
  <TitleHeader title="Game History" :userAddress="userAddress" />
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

<style lang="scss" scoped></style>
