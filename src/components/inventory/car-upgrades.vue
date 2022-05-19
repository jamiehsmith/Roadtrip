<template>
  <div class="upgrades__wrapper">
    <Subtitle title="My Car Upgrades" />
    <div class="upgrades__content">
      <div class="upgrades">
        <div class="upgrade" v-for="upgrade in upgrades" :key="upgrade.index">
          <span class="name"> {{ upgrade.name }}</span>
          <div class="upgrade__items-wrapper">
            <Tile v-for="item in upgrade.items" :key="item.index" :size="30" />
          </div>
        </div>
      </div>
      <div class="car-upgrades">
        <Upgrades />
        <div>
            <Tile :size="115" />
            Applying to Active Car
           <Button text="Go To Garage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Subtitle from '../../components/shared/subtitle';
import Tile from '../../components/shared/tile';
import Upgrades from '../../components/inventory/upgrades';
import Button from '../../components/shared/button';


export default {
  name: 'CarUpgrades',

  components: {
    Subtitle,
    Tile,
    Upgrades,
    Button,
  },

  computed: {
    tierUpgrades() {
      return [{}, {}, {}, {}, {}];
    },

    upgrades() {
      return [
        {
          name: 'Starter',
          // Test objects for now
          items: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        },
        {
          name: 'Micro',
          // Test objects for now
          items: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        },
        {
          name: 'Sedan',
          // Test objects for now
          items: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        },
        {
          name: 'Muscle',
          // Test objects for now
          items: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        },
        {
          name: 'Sport',
          // Test objects for now
          items: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        },
        {
          name: 'Super',
          // Test objects for now
          items: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.upgrades__wrapper {
  margin-top: 40px;
  .upgrades__content {
    display: flex;
    background: #1f1d2b;
    .upgrades,
    .car-upgrades {
      display: flex;
      flex: 1;
      flex-direction: column;
    }
    .car-upgrades {
      align-items: center;
    }
    .upgrades {
      margin: 20px;
      .upgrade {
        display: flex;
        padding: 10px 0px;
        .name {
          font-size: 16px;
          font-weight: bold;
          min-width: 60px;
        }
        .upgrade__items-wrapper {
          display: flex;
          justify-content: space-around;
          width: 100%;
        }
      }
    }
  }
}
</style>
