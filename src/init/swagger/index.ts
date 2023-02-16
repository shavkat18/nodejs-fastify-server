import {SwaggerOptions} from "@fastify/swagger";

export const swagger: SwaggerOptions = {
	routePrefix: "/api/v1/doc",
	swagger: {
		info: {
			title: "Test swagger",
			description: "Testing the Fastify swagger API",
			version: "0.1.0"
		},
		externalDocs: {
			url: "https://swagger.io",
			description: "Find more info here"
		},
		host: "localhost:5000",
		schemes: ["http"],
		consumes: ["application/json"],
		produces: ["application/json"],
		tags: [
			{name: "test", description: "test group"},
		],
	},
	uiConfig: {
		docExpansion: "full",
		deepLinking: false
	},
	uiHooks: {
		onRequest: function (request, reply, next) {
			next();
		},
		preHandler: function (request, reply, next) {
			next();
		}
	},
	staticCSP: true,
	transformStaticCSP: (header) => header,
	exposeRoute: true
};
