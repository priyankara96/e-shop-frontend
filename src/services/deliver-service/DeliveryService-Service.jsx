import environment from "../../enviroment.prod";
import axios from "axios";

class DeliveryServiceApiService {
	getDeliveryServiceDetails(filterModel) {
		return axios.post(`${environment.apiUrl}deleveryService/getAllDeliveryServices`, filterModel);
	}

	saveDeliveryService(delviveryServiceModel) {
		return axios.post(`${environment.apiUrl}deleveryService`, delviveryServiceModel);
	}

	deleteDeliveryService(deliveryServiceId) {
		return axios.delete(`${environment.apiUrl}deleveryService/` + deliveryServiceId);
	}

	enableDisableDeliveryService(permistionDTO) {
		return axios.put(`${environment.apiUrl}deleveryService`, permistionDTO);
	}
}

export default new DeliveryServiceApiService();
