import environment from "../../enviroment.prod";
import axios from "axios";

class ReportManagerApiService {
	downloadPdf() {
		return axios.get(`${environment.apiUrl}report`);
	}
}

export default new ReportManagerApiService();
