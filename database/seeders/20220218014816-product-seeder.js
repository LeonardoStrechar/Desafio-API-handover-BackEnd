/** @format */

const { hash } = require('bcryptjs');

module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert('products', [
			{
				name: 'Anjo',
				liters: 5,
				amount: 1,
				ProductTypeId: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Bicolor-1',
				size: '1x1',
				amount: 1,
				ProductTypeId: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Magenta',
				type: 'Verão',
				amount: 1,
				ProductTypeId: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Revelador',
				usability: 'Revelar',
				amount: 1,
				ProductTypeId: 4,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		return await queryInterface.bulkDelete('products', null, {});
	},
};
