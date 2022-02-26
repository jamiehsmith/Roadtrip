<template>
  <div>
    <div class="header">
      <el-input
        class="input"
        :placeholder="isLoading ? 'Game loading...' : 'How many poptarts?'"
        v-model="input"
        :disabled="isLoading"
        clearable
      />
      <el-button :disabled="!input" @click="startGame"
        >Gimme poptarts</el-button
      >
    </div>
    <br /><br />
    <Unity :unity="unityContext" width="600px" height="400px" />
  </div>
</template>

<script>
import UnityWebgl from 'unity-webgl';

const Unity = new UnityWebgl({
  loaderUrl: 'build/game.loader.js',
  dataUrl: 'build/game.data',
  frameworkUrl: 'build/game.framework.js',
  codeUrl: 'build/game.wasm',
});

export default {
  name: 'Game',

  components: {
    Unity: UnityWebgl.vueComponent,
  },

  data() {
    return {
      input: '',
      isLoading: true,
      unityContext: Unity,
    };
  },

  methods: {
    startGame() {
      if (isNaN(this.input)) {
        alert('That\'s not a number, bozo');
        return;
      }
      const numSquares = parseInt(this.input);
      // Find Unity method "CreateSquares" and passes the numSquares argument to it.
      Unity.send('Gameplay', 'CreateSquares', numSquares);
    },
  },

  created() {
    Unity.on('progress', (percent) => console.log('Unity Loaded: ', percent))
      .on('created', () => (this.isLoading = false))
      .on('destroyed', () => console.log('Unity Instance: Destroyed.'));
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  .input {
    padding-right: 10px;
  }
}
</style>
