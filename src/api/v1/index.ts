import {FastifyInstance, FastifyPluginOptions} from "fastify";
import version from "@api/v1/test";


export default function (fastify: FastifyInstance, opts: FastifyPluginOptions, done: (err?: Error) => void) {
	void fastify.register(version, {prefix: "/test"});
	done();
}
