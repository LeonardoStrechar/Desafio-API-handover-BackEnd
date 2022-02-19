/** @format */
'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Product extends Model {
		static associate(models) {
			Product.belongsTo(models.ProductType);
		}
	}
	Product.init(
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			amount: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			liters: {
				type: DataTypes.INTEGER,
			},
			size: {
				type: DataTypes.STRING,
			},
			type: {
				type: DataTypes.ENUM,
				values: ['Inverno', 'Verão'],
			},
			usability: {
				type: DataTypes.STRING,
			},
		},
		{
			sequelize,
			modelName: 'Product',
			tableName: 'products',
		},
	);

	return Product;
};
