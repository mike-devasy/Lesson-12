import { candidates } from "@/store/settings";
export default {
	namespaced:true,
	state: {
		candidatesList:[],
		editCandidatesList:[],
	},
	getters: {
		getCandidatesList:(state) => state.candidatesList,
		getCandidateById:(state) => candidateId => state.candidatesList.find((candidate) => candidate.id == candidateId),
    getEditCandidatesList:(state) => state.editCandidatesList
	},
	mutations: {
		onLoadCandidatesList(state, array) {
			state.candidatesList = array;
			state.editCandidatesList = [...state.candidatesList]
		},
		addCandidateById(state, fullCandidate){
			console.log('fullCandidate', fullCandidate);
			
			state.editCandidatesList.push({...fullCandidate,id: new Date().getTime()})
		},
 
		removeCandidateById(state, candidateId){
			state.editCandidatesList = state.editCandidatesList.filter((candidate) => candidate.id !== candidateId)
		},
 
	},
	actions: {
		onLoadCandidatesList({commit}) {
			commit('onLoadCandidatesList', candidates);
		},
 
	}
};