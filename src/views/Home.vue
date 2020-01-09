<template>
	<div class="home" >
		<div class="title" >
			<ul >
				<!-- <li  :class="[menu.name ==$route.meta.menuName ? 'activeMenu' : '']" @click="$router.push(menu.path)"  :key="menu.id" v-for=" menu in menus">{{menu.name}}</li> -->
				
<router-link :to="menu.path" tag="li"  :class="[menu.name ==$route.meta.menuName ? 'activeMenu' : '']"  :key="menu.id" v-for=" menu in menus">{{menu.name}}</router-link>

			</ul>
		</div>
		<div class="sider" >
			<ul >
				<router-link  tag="li" :class="[children.name ==$route.meta.siderName ? 'activeSild' : '']" :to="children.path"  :key="children.id" v-for="children in childrenMenu">{{children.name}}</router-link>
			</ul>
		</div>
		<div class="content" ><router-view /></div>
		<div class="footer" >
			<p>天津美腾科技有限公司 Tianjin Meiteng Technology Co.,Itd</p>
		</div>
	</div>
</template>

<script>
	const menuData= [
				{
					name: 'one',
					id: 0,
					path:'/TITLE/home/one',
					children: [
						{
							name: 'one-1',
							id: '0-1',
							path:'/TITLE/home/one/one1',
						},
						{
							name: 'one-2',
							id: '0-2',
							path:'/TITLE/home/one/one2',
						},
						{
							name: 'one-3',
							id: '0-3',
							path:'/TITLE/home/one/one3',
						},
						{
							name: 'one-4',
							id: '0-4',
							path:'/TITLE/home/one/one4',
						}
					]
				},
				{
					name: 'two',
					id: 1,
					path:'/TITLE/home/two',
					children: [
						{
							name: 'two-1',
							id: '1-1',
							path:'/TITLE/home/two/two1',
						},
						{
							name: 'two-2',
							id: '1-2',
							path:'/TITLE/home/two/two2',
						},
						{
							name: 'two-3',
							id: '1-3',
							path:'/TITLE/home/two/two3',
						},
						{
							name: 'two-4',
							id: '1-4',
							path:'/TITLE/home/two/two4',
						}
					]
				},
				{
					name: 'three',
					id: 2,
					path:'/TITLE/home/three',
					children: [
						{
							name: 'three-1',
							id: '2-1',
							path:'/TITLE/home/three/three1',
						},
						{
							name: 'three-2',
							id: '2-2',
							path:'/TITLE/home/three/three2',
						},
						{
							name: 'three-3',
							id: '2-3',
							path:'/TITLE/home/three/three3',
						},
						{
							name: 'three-4',
							id: '2-4',
							path:'/TITLE/home/three/three4',
						}
					]
				},
				{
					name: 'four',
					id: 3,
					path:'/TITLE/home/four',
					children: [
						{
							name: 'four-1',
							id: '3-1',
							path:'/TITLE/home/four/four1',
						},
						{
							name: 'four-2',
							id: '3-2',
							path:'/TITLE/home/four/four2',
						},
						{
							name: 'four-3',
							id: '3-3',
							path:'/TITLE/home/four/four3',
						},
						{
							name: 'four-4',
							id: '3-4',
							path:'/TITLE/home/four/four4',
						}
					]
				},
				{
					name: 'five',
					id: 4,
					path:'/TITLE/home/five',
					children: [
						{
							name: 'five-1',
							id: '4-1',
							path:'/TITLE/home/five/five1',
						},
						{
							name: 'five-2',
							id: '4-2',
							path:'/TITLE/home/five/five2',
						},
						{
							name: 'five-3',
							id: '4-3',
							path:'/TITLE/home/five/five3',
						},
						{
							name: 'five-4',
							id: '4-4',
							path:'/TITLE/home/five/five4',
						}
					]
				},
				{
					name: 'six',
					id: 5,
					path:'/TITLE/home/six',
					children: [
						{
							name: 'six-1',
							id: '5-1',
							path:'/TITLE/home/six/six1',
						},
						{
							name: 'six-2',
							id: '5-2',
							path:'/TITLE/home/six/six2',
						},
						{
							name: 'six-3',
							id: '5-3',
							path:'/TITLE/home/six/six3',
						},
						{
							name: 'six-4',
							id: '5-4',
							path:'/TITLE/home/six/six4',
						}
					]
				}
			]
export default {
	name: 'home',
	data() {
		return {
		menus:menuData,
		childrenMenu:'',
		};
	},
	mounted(){
this.activeData()
	},
	methods:{
		activeData(){
			for(var i=0;i<menuData.length;i++){
				if(menuData[i].name==this.$route.meta.menuName){
					this.childrenMenu=menuData[i].children
				}
			}
		},
	},
	watch: {
	  $route(to, form) {
		  this.activeData()
	  }
	}
};
</script>
<style lang="scss" scoped>
	.home{
		width: 100%;height: 100%;
		.title{
			width: 100%;height: 50px;background: #fff;box-sizing: border-box;padding-left: 150px;
			ul{
				width: 100%;height: 50px;list-style: none;
				li{
					float: left; width: 100px; height: 50px;line-height: 50px;cursor: pointer;cursor: pointer;
					&.activeMenu {
					  color: #2c9ae6;
					  background: #e6f7ff;
					  border-bottom: 4px solid #2c9ae6;
					  box-sizing: border-box;
					}
				}
			}
		}
		.sider{
			width: 100px;height: calc(100% - 100px);float: left;
			ul{
				width: 100%;height: 100%;overflow: hidden;
				li{
					width: 100%; height: 50px ;margin-bottom: 10px; line-height: 50px;cursor: pointer;
					&.activeSild {
					  color: #2c9ae6;
					  background: #e6f7ff;
					  border-right: 4px solid #2c9ae6;
					  box-sizing: border-box;
					}
				}
			}
		}
		.content{
			width:calc(100% - 100px);height: calc(100% - 100px);background: #ccc;float: left;
		}
		.footer{
			width: 100%;height: 50px;float: left;background: #2c9ae6;color: #fff;line-height: 50px;
		}
	}
</style>