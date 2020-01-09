
<template>
	<div>
		<p>{{title}}</p>
	</div>
</template>

<script>

import router from '../router/index.js'
export default {
  name: 'AppHeader',
  data () {
      return {
		  title:'one-1'
      }
  },
  created () {
    router.beforeEach((to, from ,next) => {
		this.title =to.name
        next()
    })
  },

 
}
</script>




