<template>
	<div class="container">
<h2 class="header">
	<p>Працівник</p>
	<p>Кандидат</p>
	<p>День</p>
</h2>
<ul>
	<li v-for="interview in getInterviewsList" :key="interview.id"><div class="interview"><span>{{ interview.workerName.name }}---{{ interview.workerName.category }}</span>  <span>{{ interview.candidate.name }} -- {{ interview.candidate.category }}</span> <span>{{ interview.day }}</span></div><button @click="onDelete(interview)">Видалити</button></li>
</ul>
	</div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

	export default {
		name:'InterviewsList',
		computed:{
			...mapGetters('interviews', ['getInterviewsList']),
			...mapGetters( 'workers', ['getWorkersList']),
			...mapGetters('candidates', ['getCandidatesList'])
		},
		created(){
			this.onLoadWorkersList(),
			this.onLoadCandidatesList()
		},
		methods: {
			...mapActions( 'workers',  ['onLoadWorkersList']),
			...mapActions('candidates', ['onLoadCandidatesList']),
			...mapActions('interviews', ['deleteInterview']),
			...mapMutations('workers', ['addWorkerById']),
			...mapMutations('candidates', ['addCandidateById']),
		onDelete(interview){
			const fullWorker = this.getWorkersList.find((worker) => worker.name === interview.workerName.name)
			const fullCandidate = this.getCandidatesList.find((candidate) => candidate.name === interview.candidate.name)
		this.addWorkerById(fullWorker)
		this.addCandidateById(fullCandidate)
		this.deleteInterview(interview.id);
  },
			}
		}
	
</script>

<style lang="css" scoped>
.header{
	width: 720px;
	padding-left: 300px;
display: flex;
justify-content: space-between;
}
.interview{
	display: flex;
	width: 750px;
	justify-content: space-between;
	padding-left: 150px;
}
button{
	display: inline-block;
	width: 120px;
	height: 30px;
	border-radius: 5px;
	border:none;
	background-color: rgba(127, 165, 255, 0.578);
	cursor:pointer;
	transition: all 0.3s ease 0s;
}
button:hover{
	color:white;
	background-color: rgba(36, 82, 190, 0.578);

}
 
ul{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
li{
	width: 1100px;
	color: blue;
	font-style: italic;
	display: flex;
	align-items: center;
	justify-content: space-between;
	list-style: none;
	margin-bottom: 15px;
}
</style>