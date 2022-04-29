<template>
  <div class="title-container">
    <span class="title">{{ title }} </span>
    <div class="address">
      <div class="profile-icon"></div>
      <span class="user-address"> {{ formattedUserAddress }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitleHeader',

  props: {
    title: {
      type: String,
      default: '',
    },
    userAddress: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      address: '',
    };
  },

  computed: {
    formattedUserAddress() {
      return `${this.userAddress.slice(0, 8)}...${this.userAddress.slice(-2)}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.title-container {
  padding: 48px 56px 0 37px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    font-weight: 700;
    font-size: 31px;
    color: #ffffff;
  }
  .address {
    display: flex;
    align-items: center;
    .profile-icon {
      height: 32px;
      width: 32px;
      border-radius: 50%;
      background: #cce7ff;
    }
    .user-address {
      padding-left: 11px;
      width: 115px;
      color: #ffffff;
      font-weight: 600;
    }
  }
}
</style>
