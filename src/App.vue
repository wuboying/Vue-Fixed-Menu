<template>
  <div id="app">
 <aaaa></aaaa>
    <router-view/>
  </div>
</template>
<script>
	import aaaa from './components/gouzi.vue'
	export default {
	  name: 'App',
	  components: {
	   aaaa
	  },
	}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
	margin: 0;
	padding: 0;
}
  	body,html{
		width: 100%;
		height: 100%;
	}
	#app{
		width: 100%;
		height: 100%;
		}
</style>
