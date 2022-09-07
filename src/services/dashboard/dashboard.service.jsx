import environment from "../../enviroment.prod";
import axios from "axios";

class DashboardApiService {
	getDashboardMasterData() {
		return axios.get(`${environment.apiUrl}dashboard`);
	}
}

export default new DashboardApiService();
