import {workerDayArray} from '@/store/settings'
export default {
	namespaced:true,
	state: {
		workerWeek:workerDayArray,
		interviewsList:[],
	},
	getters: {
getWorkerWeek:(state) => state.workerWeek,
getWorkerLoop:(state) => state.workerWeek,
getInterviewsList:(state) => state.interviewsList
	},
	 	mutations: {
			setInterview(state, interview) {
			state.interviewsList.push(interview)
		},
		deleteInterview(state, interviewId){
			state.interviewsList = state.interviewsList.filter((interview) => interview.id !== interviewId)
		}
	},
	actions: {
		onAddInterview({commit}, interview) {
 
			
		
			commit('setInterview', {
				id: new Date().getTime(),
				...interview});

		},
		deleteInterview({commit}, interviewId){
			commit('deleteInterview', interviewId)
		}
	}
	};
