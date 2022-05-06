<template>
  <div class="garage__wrapper">
    <TitleHeader title="Garage" :userAddress="userAddress" />
  </div>
</template>

<script>
import TitleHeader from '../../components/shared/title-header';

export default {
  name: 'Garage',

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
.garage__wrapper {
  padding-left: 37px;
}
</style>
