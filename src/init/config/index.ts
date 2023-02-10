import dotenv from "dotenv";

dotenv.config();
const {
	SERVER_ADDR,
	SERVER_PORT,
	NODE_ENV
} = process.env;


export const node = {
	node_env: NODE_ENV
};
export const app = {
	host: SERVER_ADDR,
	port: SERVER_PORT
};
