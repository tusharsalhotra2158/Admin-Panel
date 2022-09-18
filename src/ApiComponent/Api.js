import axios from "axios";

export const axioInstance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
});

// Request interceptor for API calls
axioInstance.interceptors.request.use(
	async (config) => {
		const value = localStorage.userJWT;
		if (value) {
			const keys = JSON.parse(value);
			config.headers = {
				"x-token": keys,
				Accept: "application/json",
			};
		}
		return config;
	},
	(error) => {
		Promise.reject(error);
	}
);
export const IMAGE_LINK = `${process.env.BASE_URL}/images`;
export const LIVE_IMAGE_LINK =
	"https://dev-chefjoy.s3-us-west-2.amazonaws.com/media/images/";