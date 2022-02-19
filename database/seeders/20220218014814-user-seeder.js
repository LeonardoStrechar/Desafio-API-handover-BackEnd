/** @format */

const { hash } = require('bcryptjs');

module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert('users', [
			{
				name: 'Example',
				email: 'example@example.com',
				password: await hash('example', 8),
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		return await queryInterface.bulkDelete('users', null, {});
	},
};
