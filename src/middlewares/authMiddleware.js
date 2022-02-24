/** @format */

const { verify } = require("jsonwebtoken");

module.exports = {
	auth(request, response, next) {
		const authToken = request.headers.authorization;

		if (!authToken) return response.status(401).end();

		const [, token] = authToken.split(" ");

		try {
			verify(token, "9c966837e17bd7739c00cbbef665739a");

			return next();
		} catch (error) {
			return response.status(401).end();
		}
	},
};
