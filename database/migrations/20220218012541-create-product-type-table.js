/** @format */

'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		return await queryInterface.createTable('product_types', {
			id: {
				type: Sequelize.DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: Sequelize.DataTypes.STRING,
				allowNull: false,
			},
			createdAt: {
				type: Sequelize.DataTypes.DATE,
				allowNull: false,
			},
			updatedAt: {
				type: Sequelize.DataTypes.DATE,
				allowNull: false,
			},
		});
	},

	async down(queryInterface, Sequelize) {
		return await queryInterface.dropTable('products');
	},
};
