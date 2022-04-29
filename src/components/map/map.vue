<template>
  <div>
    <Unity
      :unity="unityContext"
      :width="`${window.width}px`"
      :height="`${window.height}px`"
    />
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
  name: 'Map',

  components: {
    Unity: UnityWebgl.vueComponent,
  },

  props: {
    userAddress: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      input: '',
      isLoading: true,
      unityContext: Unity,
      window: {
        height: 1000,
        width: 1400,
      },
      navbarWidth: 256,
    };
  },

  watch: {
    isLoading() {
      if (!this.isLoading) {
        // Send login to Unity
        Unity.send('EventSystem', 'Login', this.userAddress);
      }
    },
  },

  methods: {
    addEventListeners() {
      window.addEventListener('resize', this.setGameSize);
    },

    setGameSize() {
      // Resize game to full window
      this.window.height = window.innerHeight;
      this.window.width = window.innerWidth - this.navbarWidth;
    },
  },

  created() {
    this.userAddress = localStorage.getItem('userAddress');
    this.setGameSize();
    this.addEventListeners();
    Unity.on('progress', (percent) => console.log('Unity Loaded: ', percent))
      .on('created', () => (this.isLoading = false))
      .on('destroyed', () => console.log('Unity Instance: Destroyed.'));
  },

  destroyed() {
    window.removeEventListener('resize', this.setGameSize);
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
