import environment from "../../enviroment.prod";
import axios from "axios";

class DeliveryServiceApiService {
	getDeliveryServiceDetails(filters) {
		return axios.post(`${environment.apiUrl}deleveryService/getAllDeliveryServices`, filters);
	}

	saveDeliveryService(delviveryServiceModel) {
		return axios.post(`${environment.apiUrl}deleveryService`, delviveryServiceModel);
	}

	deleteDeliveryService(deliveryServiceId) {
		return axios.delete(`${environment.apiUrl}deleveryService/` + deliveryServiceId);
	}
}

export default new DeliveryServiceApiService();
