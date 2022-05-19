<template>
  <div class="air-drops__wrapper">
    <Subtitle title="Air Drops" />
    <div class="air_drops__items">
      <Tile v-for="airDrop in airDrops" :key="airDrop.index" />
    </div>
    <div class="buttons">
      <Button text="Mint Selected" />
      <Button text="Set Selected to Active" />
      <Button text="Add Selected to Prize Game" />
    </div>
  </div>
</template>

<script>
import Subtitle from '../../components/shared/subtitle';
import Tile from '../../components/shared/tile';
import Button from '../../components/shared/button';

export default {
  name: 'AirDrops',

  components: {
    Subtitle,
    Tile,
    Button,
  },

  computed: {
    airDrops() {
      // Test objects for now
      return [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    },
  },
};
</script>

<style lang="scss" scoped>
.air-drops__wrapper {
  display: flex;
  flex-direction: column;
  color: #ffffff;
  .air_drops__items {
    display: flex;
    justify-content: space-around;
    background: #1f1d2b;
    padding: 8px;
    margin: 5px 0 16px 0;
  }
  .buttons {
    display: flex;
    .el-button:not(:first-of-type) {
      margin-left: 25px;
    }
  }
}
</style>
