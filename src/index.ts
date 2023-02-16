import Fastify, {FastifyInstance} from "fastify";
import cors from "@fastify/cors";
import {app, service} from "@config";
import api_v1 from "@api/v1";
import logger from "@logger";
import fastifySwagger from "@fastify/swagger";
import {swagger} from "@swagger";

const fastify: FastifyInstance = Fastify({
	logger: service.node_env === "development" ? logger : true,
});

void fastify.register(cors, {
	methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
});
void fastify.register(api_v1, {prefix: "/api/v1"});

void fastify.register(fastifySwagger, swagger);

// fastify.put("/some-route/:id", {
// 	schema: {
// 		description: "post some data",
// 		tags: ["user", "code"],
// 		summary: "qwerty",
// 		params: {
// 			type: "object",
// 			properties: {
// 				id: {
// 					type: "string",
// 					description: "user id"
// 				}
// 			}
// 		},
// 		body: {
// 			type: "object",
// 			properties: {
// 				hello: {type: "string"},
// 				obj: {
// 					type: "object",
// 					properties: {
// 						some: {type: "string"}
// 					}
// 				}
// 			}
// 		},
// 		response: {
// 			201: {
// 				description: "Successful response",
// 				type: "object",
// 				properties: {
// 					hello: {type: "string"}
// 				}
// 			},
// 			default: {
// 				description: "Default response",
// 				type: "object",
// 				properties: {
// 					foo: {type: "string"}
// 				}
// 			}
// 		},
//
// 	}
// }, (req, reply) => {
// 	void reply.send({msg: "asdasdasd"});
// });
fastify.ready(err => {
	if (err) throw err;
	fastify.swagger();
});

fastify.setErrorHandler(function (error, request, reply) {
	if (error) {
		fastify.log.error(error);
		void reply.status(500).send({ok: false});
	} else {
		void reply.send(error);
	}
});

fastify.listen({port: app.port, host: app.host}, (err) => {
	if (err) {
		fastify.log.error(err);
		process.exit(1);
	}
});
