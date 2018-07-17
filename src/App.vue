<template>
  <div id="app" :style="{ backgroundColor: bgcolor}">
    <img src="./assets/logo.png">
    <button-red>Jhondee</button-red>
    <button-blue>eednohj</button-blue>
    <button-green>Treefunk</button-green>
  </div>
</template>

<script>



import ButtonBlue from './components/ButtonBlue.vue'
import ButtonRed from './components/ButtonRed.vue'
import ButtonGreen from './components/ButtonGreen.vue'

export default {
  name: 'app',
  computed: {
    bgcolor(){
      return this.$store.state.buttoncolor
    }
  },
  components: {
    ButtonBlue,ButtonRed,ButtonGreen
  }
}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
