<template>
	<div>
<h3>Кандідати</h3>
<ul v-for="{name, id} in getCandidatesList" :key="id">
	<li>{{ name }}</li>
</ul>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
	export default {
		name:'CandidatesView',
		computed:{
			...mapGetters('candidates', ['getCandidatesList'])
		},
		created(){
			this.onLoadCandidatesList()
		},
		methods: {
			...mapActions('candidates', ['onLoadCandidatesList'])
				
			 
		},
	}
</script>

<style lang="scss" scoped>

</style>