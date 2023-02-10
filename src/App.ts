import fastify, {FastifyInstance} from "fastify";
import cors from "@fastify/cors";
import pino from "pino";
import {app} from "@config";
import api_v1 from "@api/v1";

class App {
	public app: FastifyInstance;
	public host: string;
	public port: number;

	constructor() {
		this.app = fastify({logger: pino({level: "info"})});
		this.host = app.host;
		this.port = Number(app.port);

		// this.connectToDatabase();
		this.initializeMiddlewares();
		this.initializeRoutes();
		// this.initializeSwagger();
		// this.initializeErrorHandling();
	}

	public listen() {
		this.app.listen({port: this.port, host: this.host}, (err) => {
			if (err) {
				this.app.log.error(err);
				process.exit(1);
			}
		});
	}

	private initializeMiddlewares() {
		void this.app.register(cors, {});
	}

	private initializeRoutes() {
		void this.app.register(api_v1, { prefix: "/api/v1" });
	}
}

export default App;
