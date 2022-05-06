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
    <div class="tier-points__wrapper">
      <Subtitle title="My Tier Points" />
      <div class="tiers">
        <div class="tier" v-for="tier in tiers" :key="tier.index">
          <span class="name"> {{ tier.name }}</span>
          <div class="tier__items-wrapper">
            <Tile v-for="item in tier.items" :key="item.index" :size="30" />
          </div>
        </div>
      </div>
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

    tiers() {
      return [
        {
          name: '2nd Gear',
          // Test objects for now
          items: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        },
        {
          name: '3nd Gear',
          // Test objects for now
          items: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        },
        {
          name: '4th Gear',
          // Test objects for now
          items: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        },
        {
          name: '5th Gear',
          // Test objects for now
          items: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        },
        {
          name: 'Redline',
          // Test objects for now
          items: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        },
      ];
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
  .tier-points__wrapper {
    margin-top: 40px;
    .tiers {
      background: #1f1d2b;
      padding: 20px;
      .tier {
        display: flex;
        padding: 10px 0px;
        .name {
          font-size: 16px;
          font-weight: bold;
          min-width: 120px;
        }
        .tier__items-wrapper {
          display: flex;
          justify-content: space-around;
          width: 100%;
        }
      }
    }
  }
}
</style>
