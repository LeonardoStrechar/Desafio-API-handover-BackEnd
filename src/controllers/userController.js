/** @format */

const { hash } = require('bcryptjs');
const sequelize = require('../models/index.js');

module.exports = {
	async register(req, res) {
		try {
			const { name, email, password } = req.body;

			if (!name) throw 'Name is missing';
			if (!email) throw 'Email is missing';
			if (!password) throw 'Password is missing';

			const user = await sequelize.User.findOne({ where: { email: email } });

			if (user) {
				throw 'This email has already been used';
			}

			const passwordHash = await hash(password, 8);

			return res.status(201).json({
				data: await sequelize.User.create({
					name: name,
					email: email,
					password: passwordHash,
				}),
			});
		} catch (err) {
			return await res.status(400).json({ error: err });
		}
	},
};
