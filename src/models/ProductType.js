/** @format */
'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class ProductType extends Model {
		static associate(models) {
			ProductType.hasMany(models.Product);
		}

		static getTableName() {
			return 'product_types';
		}
	}

	ProductType.init(
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
		},
		{
			sequelize,
			modelName: 'ProductType',
			tableName: 'product_types',
		},
	);

	return ProductType;
};
