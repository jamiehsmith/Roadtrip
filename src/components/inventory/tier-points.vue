<template>
  <div class="tier-points__wrapper">
    <Subtitle title="My Tier Points" />
    <div class="tier-points__content">
      <div class="tiers">
        <div class="tier" v-for="tier in tiers" :key="tier.index">
          <span class="name"> {{ tier.name }}</span>
          <div class="tier__items-wrapper">
            <Tile v-for="item in tier.items" :key="item.index" :size="30" />
          </div>
        </div>
      </div>
      <Upgrades />
    </div>
  </div>
</template>

<script>
import Subtitle from '../../components/shared/subtitle';
import Tile from '../../components/shared/tile';
import Upgrades from '../../components/inventory/upgrades';

export default {
  name: 'TierPoints',

  components: {
    Subtitle,
    Tile,
    Upgrades,
  },

  computed: {
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

    tierUpgrades() {
      return [{}, {}, {}, {}, {}];
    },
  },
};
</script>

<style lang="scss" scoped>
.tier-points__wrapper {
  margin-top: 40px;
  .tier-points__content {
    display: flex;
    background: #1f1d2b;
    .tiers,
    .upgrades__container {
      display: flex;
      flex: 1;
      flex-direction: column;
    }
    .tiers {
      background: #1f1d2b;
      margin: 20px;
      .tier {
        display: flex;
        padding: 10px 0px;
        .name {
          font-size: 16px;
          font-weight: bold;
          min-width: 60px;
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
