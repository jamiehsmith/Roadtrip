<template>
  <div class="dashboard__wrapper">
    <TitleHeader title="Dashboard" :userAddress="userAddress" />
  </div>
</template>

<script>
import TitleHeader from '../../components/shared/title-header';

export default {
  name: 'Dashboard',

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
.dashboard__wrapper {
  padding-left: 37px;
}
</style>
