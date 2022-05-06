<template>
  <div>
    <TitleHeader title="Inventory" :userAddress="userAddress" />
    <div class="metric-boxes">
      <div v-for="box in metricBoxes" :key="box.index">
        <MetricBox v-bind="box" />
      </div>
    </div>
  </div>
</template>

<script>
import TitleHeader from '../../components/shared/title-header';
import MetricBox from '../../components/shared/metric-box';

export default {
  name: 'Inventory',

  components: {
    TitleHeader,
    MetricBox,
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
.metric-boxes {
  display: flex;
  justify-content: space-around;
  margin: 56px 0 74px 40px;
}
</style>
