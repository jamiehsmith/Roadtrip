<template>
  <div class="inventory__wrapper">
    <TitleHeader title="Inventory" :userAddress="userAddress" />
    <div class="metric-boxes">
      <div v-for="box in metricBoxes" :key="box.index">
        <MetricBox v-bind="box" />
      </div>
    </div>
    <AirDrops />
    <TierPoints />
    <CarUpgrades />
  </div>
</template>

<script>
import TitleHeader from '../../components/shared/title-header';
import MetricBox from '../../components/shared/metric-box';
import AirDrops from '../../components/inventory/air-drops';
import TierPoints from '../../components/inventory/tier-points';
import CarUpgrades from '../../components/inventory/car-upgrades';

export default {
  name: 'Inventory',

  components: {
    TitleHeader,
    MetricBox,
    AirDrops,
    TierPoints,
    CarUpgrades,
  },

  props: {
    userAddress: {
      type: String,
      required: true,
    },
  },

  computed: {
    metricBoxes() {
      return [
        {
          icon: 'fa-store',
          title: 'New Airdrops',
          number: 5,
          color: '#F4B871',
        },
        {
          icon: 'fa-store',
          title: 'Tier Points',
          number: 2,
          color: '#FF6699',
        },
        {
          icon: 'fa-store',
          title: 'Car Upgrades',
          number: 3,
          color: '#71FACA',
        },
        {
          icon: 'fa-store',
          title: 'Total Police',
          number: 4,
        },
        {
          icon: 'fa-store',
          title: 'Total Toll Workers',
          number: 4,
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.inventory__wrapper {
  padding-left: 37px;
  .metric-boxes {
    display: flex;
    justify-content: space-around;
    margin: 56px 0 74px 3px;
  }
}
</style>
