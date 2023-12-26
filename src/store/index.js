import { createStore } from "vuex";
import workers from "./modules/workers";
import candidates from "./modules/candidates";
import interviews from "./modules/interviews";
export default createStore({
  modules: {
workers,
candidates,
interviews
	},
});
