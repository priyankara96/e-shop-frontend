import environment from "../../enviroment.prod";
import axios from "axios";

class MessageApiService {
	saveMessage(messageDTO) {
		return axios.post(`${environment.apiUrl}message`, messageDTO);
	}

	markAsRead(id) {
		return axios.delete(`${environment.apiUrl}message/` + id);
	}
}

export default new MessageApiService();
