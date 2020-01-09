<template>
	<div>
		one233
		<p>num:{{_num}}</p>
		<p>doubleNum:{{doubleNum}}</p>
		<p><button @click="INCREMENT_NUM(10)">加⑩</button></p>
		<p><button @click="getNumberFromBackend(1000)">加壹仟</button></p>
		
	</div>
</template>

<script>
	
	import {
	    INCREMENT_NUM,CHANGE_NUM
	} from '../../store/const'
	import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
	
	export default{
			name:"one-2",
			data(){
				return {
					
				}
			},
			computed:{
				...mapState({
					_num:state=>state.num
				}),
				...mapGetters(['doubleNum'])
			},
			methods:{
				...mapMutations([INCREMENT_NUM]),
				...mapActions(['getNumberFromBackend'])
			}
		}
	</script>
	
</script>

<style>
</style>
