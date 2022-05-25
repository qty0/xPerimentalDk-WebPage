<template>


  <About-Us class="foreground"/>>

  <div class="background">
    <Particles
        id="tsparticles"
        class="background"
        :options="options"
        :key="optionSelected"
        :particlesInit="particlesInit"
    />
  </div>

</template>

<script lang="ts">
import stringifyObject from 'stringify-object';
import { Options, Vue } from "vue-class-component";
import { optionsMap } from './map-options';
import AboutUs  from './components/AboutUs.vue';
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
@Options({
  components: {
    AboutUs,
  },
})
export default class App extends Vue {
    

  async particlesInit(engine: Engine) {
    await loadFull(engine);
  }

  optionSelected = 'crazyParticles'

  changeOption(newValue: string) {
    this.optionSelected = newValue;
  }

  get codeStringified() {
    return stringifyObject(optionsMap[this.optionSelected], {
      indent: '  ',
      singleQuotes: false,
    });
  }

  get options() {
    return optionsMap[this.optionSelected];
  }

  get optionsList() {
    return Object.keys(optionsMap);
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap');

#app {
font-family: 'Roboto', sans-serif;
}
.foreground {
  z-index: 1;
}
.background {
  position: fixed;
  width: 100%;
  z-index: -1;
}
</style>
