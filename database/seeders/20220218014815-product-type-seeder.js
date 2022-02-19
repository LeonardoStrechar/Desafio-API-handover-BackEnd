/** @format */

const { hash } = require('bcryptjs');

module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert('product_types', [
			{
				name: 'Fotolito',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Chapa',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Tinta',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Químicos',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		return await queryInterface.bulkDelete('product_types', null, {});
	},
};
