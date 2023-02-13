import {node} from "@config";

interface iLogger {
	development: object,
	production: boolean,
	test: boolean
}

export const envToLogger: iLogger = {
	development: {
		transport: {
			target: "pino-pretty",
			options: {
				translateTime: "SYS:standard",
				ignore: "pid,hostname",
			},
		},
	},
	production: true,
	test: false,
};
export const logger = envToLogger[node.node_env as keyof typeof envToLogger] ?? true;
