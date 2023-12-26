 <template>
	<div>
 <interviews-list />
 <interviews-edit />
	</div>
 </template>
 
 <script>
 import InterviewsList from '@/components/InterviewsList.vue';
 import InterviewsEdit from '@/components/InterviewsEdit.vue';
	export default {
		name:'InterviewsView',
		components:{InterviewsList, InterviewsEdit }
	}
 </script>
 
 <style lang="scss" scoped>
 
 </style>
