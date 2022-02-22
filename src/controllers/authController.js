/** @format */

const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const sequelize = require("../models/index.js");
const { secretKey } = require("../../config.json");

module.exports = {
	async login(req, res) {
		try {
			const { email, password } = req.body;

			if (!email) throw "Email is missing";
			if (!password) throw "Password is missing";

			const user = await sequelize.User.findOne({ where: { email: email } });

			if (!user || !(await compare(password, user.password))) {
				throw "Incorrect email or password";
			}

			return res.status(200).json({
				token: sign({ id: user.id, email: user.email }, secretKey, {
					subject: String(user.id),
					expiresIn: "1d",
				}),
			});
		} catch (err) {
			return await res.status(400).json({ error: err });
		}
	},
};
