<template>
  <div>
    Here is a Unity game
    <Unity />
  </div>
</template>

<script>
import Unity from 'vue-unity-webgl';

export default {
  name: 'Game',

  components: {
    Unity,
  },
}
</script>

<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
