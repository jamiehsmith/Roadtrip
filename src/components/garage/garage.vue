<template>
  <TitleHeader title="Garage" :userAddress="userAddress" />
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

<style lang="scss" scoped></style>
