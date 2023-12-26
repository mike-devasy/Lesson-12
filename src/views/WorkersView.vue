<template>
	<div>
<h3>Наші працівники</h3>
<ul v-for="{name, id} in getWorkersList" :key="id">
	<li>{{ name }}</li>
</ul>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
	export default {
		name:'WorkersView',
		computed:{
			...mapGetters( 'workers', ['getWorkersList']),
		},
		created(){
			this.onLoadWorkersList()
		},
		methods: {
			...mapActions( 'workers',  ['onLoadWorkersList'])

		},

	}
</script>

<style lang="scss" scoped>

</style>