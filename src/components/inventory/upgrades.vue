<template>
  <div class="upgrades__container">
    <div class="upgrade-tiles">
      <Tile v-for="upgrade in upgrades" :key="upgrade.index" :size="60" />
    </div>
    <Button text="Select Five to Upgrade" />
  </div>
</template>

<script>
import Tile from '../../components/shared/tile';
import Button from '../../components/shared/button';

export default {
  name: 'Upgrades',

  components: {
    Tile,
    Button,
  },

  computed: {
    upgrades() {
      return [{}, {}, {}, {}, {}];
    },
  },
};
</script>

<style lang="scss" scoped>
.upgrades__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  .upgrade-tiles {
    display: flex;
    .tile {
      margin: 10px 10px 30px 10px;
    }
  }
}
</style>
