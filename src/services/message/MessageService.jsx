import environment from "../../enviroment.prod";
import axios from "axios";

class MessageApiService {
	saveMessage(messageDTO) {
		return axios.post(`${environment.apiUrl}message`, messageDTO);
	}
}

export default new MessageApiService();
