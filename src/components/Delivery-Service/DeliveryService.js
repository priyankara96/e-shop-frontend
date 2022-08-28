import React, { Component, useEffect, useState } from "react";
import DeliveryServiceApiService from "../../services/deliver-service/DeliveryService-Service";

const DeliveryService = () => {
	const [filters, setFilters] = useState(null);
	useEffect(() => {
		getDeliveryServices(filters);
	}, []);
	const getDeliveryServices = () => {
		DeliveryServiceApiService.getDeliveryServiceDetails().then((response) => {
			console.log(response);
		});
	};
	return <div>Delivery Service works</div>;
};

export default DeliveryService;
