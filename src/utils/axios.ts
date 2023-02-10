import axios, {AxiosInstance} from "axios";
import * as https from "node:https";


const instance: AxiosInstance = axios.create({
	baseURL: "http://localhost:8080",
	httpsAgent: new https.Agent({rejectUnauthorized: false})
});

instance.interceptors.request.use(
	config => {
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	response => {
		// console.log(response.data);
		return response;
	},
	error => {
		return Promise.reject(error);
	}
);

export default instance;
