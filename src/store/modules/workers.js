import {workers} from '@/store/settings'
export default {
	namespaced:true,
	state: {
		workersList:[],
		editWorkersList:[]
	},
	getters: {
		getWorkersList:(state) => state.workersList,
    getWorkerById:(state) => (workerId) => state.workersList.find((worker) => worker.id === workerId),
		getEditWorkersList:(state) => state.editWorkersList
	},
	mutations: {
		onLoadWorkersList(state, array) {
			state.workersList = array;
			state.editWorkersList = [...state.workersList]
		},
		removeWorkerById(state, workerId) {
			state.editWorkersList = state.editWorkersList.filter((worker) => worker.id !== workerId);
		},
		addWorkerById(state, fullWorker){
			console.log('fullWorker', fullWorker);
			
			state.editWorkersList.push({...fullWorker,id: new Date().getTime()})
		},
 
	},
	actions: {
		onLoadWorkersList({commit}) {
			commit('onLoadWorkersList', workers);
		},
 
}
}