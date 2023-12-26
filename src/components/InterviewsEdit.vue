<template>
	<div class="wrapper">
		<div class="container__edit">
		<label >
		<span>Працівник</span>
		<select v-model="interview.workerName" @change="chooseWorker">
		<option   v-for="worker in getEditWorkersList" :key="worker.id"  :value="{name:worker.name, category: worker.category, id:worker.id}">{{ worker.name }} -- {{ worker.category }}</option>
		</select>
		</label>
		<label >
		<span>Кандидат</span>
		<select v-model="interview.candidate" >
		<option  v-for="candidate in 	updateCandidatesList" :key="candidate.id"  :value="{name:candidate.name, category: candidate.category, id:candidate.id}">{{candidate.name }} -- {{ candidate.category }}</option>
		</select>
		</label>
		<label >
		<span>День</span>
		<select v-model="interview.day">
		<option v-for="day in getWorkerWeek" :key="day.id"   :value="day.title">{{ day.title }}</option>
		</select>
		</label>
		</div>
		<button id="button"  @click="onAdd">Додати</button>
	</div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
	export default {
		name:'InterviewsEdit',
		data(){
			return{
				interview:{},
				selectedWorker:{},
				updateCandidatesList:[],
			}
		},
		computed:{
			...mapGetters('interviews', ['getWorkerWeek']),
			...mapGetters('workers', ['getWorkersList']),
			...mapGetters('workers', ['getEditWorkersList']),
			...mapGetters('candidates', ['getCandidatesList']),
			...mapGetters('candidates', ['getEditCandidatesList']),
		},
  created(){
		this.updateCandidatesList = this.getEditCandidatesList
	},
		methods: {
			...mapActions('interviews', ['onAddInterview']),
			...mapMutations('workers', ['removeWorkerById']),
			...mapMutations('workers', ['selectWorkerByCandidate']),
			...mapMutations('candidates', ['removeCandidateById']),
			onAdd(){
			this.onAddInterview(this.interview)
      const workerId = this.selectedWorker ? this.selectedWorker.id : null;
			console.log('workerId', workerId);
			if(workerId !== null){
			this.removeWorkerById(workerId)
			}
const selectedCandidate = this.getCandidatesList.find((candidate) => candidate.name === this.interview.candidate.name)
const candidateId = selectedCandidate ? selectedCandidate.id : null;
if(candidateId !== null) {
	this.removeCandidateById(candidateId)
	this.updateCandidatesList = this.getEditCandidatesList
	const workerCategory = this.selectedWorker.category
	this.updateCandidatesList = this.updateCandidatesList.filter((candidate) => candidate.category !== workerCategory)
}
			this.interview = {}
			},
			chooseWorker(){
			this.selectedWorker = this.getWorkersList.find(worker => worker.name === this.interview.workerName.name);
			const workerCategory = this.selectedWorker.category
			this.updateCandidatesList = this.updateCandidatesList.filter((candidate) => candidate.category === workerCategory)
			}
		},
	}
</script>

<style lang="css" scoped>
select{
	width: 250px;
	height: 30px;
	display: flex;
}
.container__edit{
	padding: 50px;
	display: flex;
	gap: 50px;
}
label{
	font-size: 20px;
	display: flex;
	gap: 20px;
}
#button{
	display: inline-block;
	width: 250px;
	height: 35px;
	color: red;
	margin-left: 150px;
	/* align-self: center; */
}
.wrapper{
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

</style>