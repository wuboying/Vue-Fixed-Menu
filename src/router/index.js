import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/TITLE/home',
		name: 'home',
		component: Home,
		redirect: '/TITLE/home/one',
		children: [{
				path: 'one',
				name: 'one',
				component: () => import('../views/one/index.vue'),
				redirect: '/TITLE/home/one/one1',
				children: [{
						path: 'one1',
						name: 'one1',
						component: () => import('../views/one/sild.1.vue'),
						meta: {
							menuName: 'one',
							siderName: 'one-1'
						}

					},
					{
						path: 'one2',
						name: 'one2',
						component: () => import('../views/one/sild.2.vue'),
						meta: {
							menuName: 'one',
							siderName: 'one-2'
						}
					},
					{
						path: 'one3',
						name: 'one3',
						component: () => import('../views/one/sild.3.vue'),
						meta: {
							menuName: 'one',
							siderName: 'one-3'
						}
					},
					{
						path: 'one4',
						name: 'one4',
						component: () => import('../views/one/sild.4.vue'),
						meta: {
							menuName: 'one',
							siderName: 'one-4'
						}
					}
				]
			},
			{
				path: 'two',
				name: 'two',
				component: () => import('../views/two/index.vue'),
				redirect: '/TITLE/home/two/two1',
				children: [{
						path: 'two1',
						name: 'two1',
						component: () => import('../views/two/sild.1.vue'),
						meta: {
							menuName: 'two',
							siderName: 'two-1'
						}

					},
					{
						path: 'two2',
						name: 'two2',
						component: () => import('../views/two/sild.2.vue'),
						meta: {
							menuName: 'two',
							siderName: 'two-2'
						}
					},
					{
						path: 'two3',
						name: 'two3',
						component: () => import('../views/two/sild.3.vue'),
						meta: {
							menuName: 'two',
							siderName: 'two-3'
						}
					},
					{
						path: 'two4',
						name: 'two4',
						component: () => import('../views/two/sild.4.vue'),
						meta: {
							menuName: 'two',
							siderName: 'two-4'
						}
					}
				]
			},
			{
				path: 'three',
				name: 'three',
				component: () => import('../views/three/index.vue'),
				redirect: '/TITLE/home/three/three1',
				children: [{
						path: 'three1',
						name: 'three1',
						component: () => import('../views/three/sild.1.vue'),
						meta: {
							menuName: 'three',
							siderName: 'three-1'
						}

					},
					{
						path: 'three2',
						name: 'three2',
						component: () => import('../views/three/sild.2.vue'),
						meta: {
							menuName: 'three',
							siderName: 'three-2'
						}
					},
					{
						path: 'three3',
						name: 'three3',
						component: () => import('../views/three/sild.3.vue'),
						meta: {
							menuName: 'three',
							siderName: 'three-3'
						}
					},
					{
						path: 'three4',
						name: 'three4',
						component: () => import('../views/three/sild.4.vue'),
						meta: {
							menuName: 'three',
							siderName: 'three-4'
						}
					}
				]
			},
			{
				path: 'four',
				name: 'four',
				component: () => import('../views/four/index.vue'),
				redirect: '/TITLE/home/four/four1',
				children: [{
						path: 'four1',
						name: 'four1',
						component: () => import('../views/four/sild.1.vue'),
						meta: {
							menuName: 'four',
							siderName: 'four-1'
						}

					},
					{
						path: 'four2',
						name: 'four2',
						component: () => import('../views/four/sild.2.vue'),
						meta: {
							menuName: 'four',
							siderName: 'four-2'
						}
					},
					{
						path: 'four3',
						name: 'four3',
						component: () => import('../views/four/sild.3.vue'),
						meta: {
							menuName: 'four',
							siderName: 'four-3'
						}
					},
					{
						path: 'four4',
						name: 'four4',
						component: () => import('../views/four/sild.4.vue'),
						meta: {
							menuName: 'four',
							siderName: 'four-4'
						}
					}
				]
			},
			{
				path: 'five',
				name: 'five',
				component: () => import('../views/five/index.vue'),
				redirect: '/TITLE/home/five/five1',
				children: [{
						path: 'five1',
						name: 'five1',
						component: () => import('../views/five/sild.1.vue'),
						meta: {
							menuName: 'five',
							siderName: 'five-1'
						}

					},
					{
						path: 'five2',
						name: 'five2',
						component: () => import('../views/five/sild.2.vue'),
						meta: {
							menuName: 'five',
							siderName: 'five-2'
						}
					},
					{
						path: 'five3',
						name: 'five3',
						component: () => import('../views/five/sild.3.vue'),
						meta: {
							menuName: 'five',
							siderName: 'five-3'
						}
					},
					{
						path: 'five4',
						name: 'five4',
						component: () => import('../views/five/sild.4.vue'),
						meta: {
							menuName: 'five',
							siderName: 'five-4'
						}
					}
				]
			},
			{
				path: 'six',
				name: 'six',
				component: () => import('../views/six/index.vue'),
				redirect: '/TITLE/home/six/six1',
				children: [{
						path: 'six1',
						name: 'six1',
						component: () => import('../views/six/sild.1.vue'),
						meta: {
							menuName: 'six',
							siderName: 'six-1'
						}

					},
					{
						path: 'six2',
						name: 'six2',
						component: () => import('../views/six/sild.2.vue'),
						meta: {
							menuName: 'six',
							siderName: 'six-2'
						}
					},
					{
						path: 'six3',
						name: 'six3',
						component: () => import('../views/six/sild.3.vue'),
						meta: {
							menuName: 'six',
							siderName: 'six-3'
						}
					},
					{
						path: 'six4',
						name: 'six4',
						component: () => import('../views/six/sild.4.vue'),
						meta: {
							menuName: 'six',
							siderName: 'six-4'
						}
					}
				]
			}
		]
	},

]

const router = new VueRouter({
	routes
})

export default router
