import {FastifyInstance, FastifyPluginOptions} from "fastify";
// import {test} from "@core/model/test";

export default function (fastify: FastifyInstance, opts: FastifyPluginOptions, done: (err?: Error) => void) {
	fastify.get("/",{}, (request, reply) => {
		void reply.send({msg:"ok"});
	});
	done();
}
