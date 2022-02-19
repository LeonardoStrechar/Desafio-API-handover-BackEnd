/** @format */

'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		return await queryInterface.createTable('products', {
			id: {
				type: Sequelize.DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: Sequelize.DataTypes.STRING,
				allowNull: false,
			},
			amount: {
				type: Sequelize.DataTypes.INTEGER,
				allowNull: false,
			},
			liters: {
				type: Sequelize.DataTypes.INTEGER,
			},
			size: {
				type: Sequelize.DataTypes.STRING,
			},
			type: {
				type: Sequelize.DataTypes.ENUM,
				values: ['Inverno', 'Verão'],
			},
			usability: {
				type: Sequelize.DataTypes.STRING,
			},
			ProductTypeId: {
				type: Sequelize.DataTypes.INTEGER,
				references: {
					model: {
						tableName: 'product_types',
					},
					key: 'id',
				},
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
