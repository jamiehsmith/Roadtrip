<template>
    <TitleHeader title="Inventory" :userAddress="userAddress" />
</template>

<script>
import TitleHeader from '../../components/shared/title-header';

export default {
  name: 'Inventory',

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
