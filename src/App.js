import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "./MainRouter";
import { RequestContextProvider } from "./services/RequestContext";
import { UserContextProvider } from "./services/UserContext";
import "./App.scss";
import ChatApp from "./components/ChatApp";
export default function App() {
	return (
		<>
			<RequestContextProvider baseURL={"http://localhost:4000/"}>
				<UserContextProvider>
					<Router>
						<MainRouter />
						<ChatApp/>
					</Router>
				</UserContextProvider>
			</RequestContextProvider>
		</>
	);
}
