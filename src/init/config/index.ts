import dotenv from "dotenv";
import * as process from "process";

dotenv.config();

export const service = {
	node_env: String(process.env.NODE_ENV),
};
export const app = {
	host: String(process.env.SERVER_ADDR),
	port: Number(process.env.SERVER_PORT)
};
