/** @format */

const sequelize = require('../models/index.js');

module.exports = {
	async indexProduct(req, res) {
		try {
			const { type } = req.query;

			let products;

			if (type) {
				products = await sequelize.Product.findAll({
					include: 'ProductType',
					where: {
						'$ProductType.name$': type,
					},
				});
			} else {
				products = await sequelize.Product.findAll({ include: 'ProductType' });
			}

			return res.status(201).json({
				products: products,
			});
		} catch (err) {
			return await res.status(400).json({ error: err });
		}
	},

	async showProduct(req, res) {
		try {
			const { productId } = req.params;

			return res.status(200).json({
				product: await sequelize.Product.findByPk(productId, { include: 'ProductType' }),
			});
		} catch (err) {
			return await res.status(400).json({ error: err });
		}
	},

	async createProduct(req, res) {
		try {
			const { name, amount, typeId, liters, size, type, usability } = req.body;

			if (!name) throw 'name is missing';
			if (!amount) throw 'amount is missing';
			if (!typeId) throw 'typeId is missing';

			if (typeId < 1 || typeId > 4) throw 'Invalid typeId';
			const values = { name: name, amount: amount, ProductTypeId: typeId };

			if (typeId === 1) {
				if (!liters) throw 'liters is missing';
				values['liters'] = liters;
			}
			if (typeId === 2) {
				if (!size) throw 'size is missing';
				values['size'] = size;
			}
			if (typeId === 3) {
				if (!type) throw 'type is missing';
				if (!['Verão', 'Inverno'].includes(type)) throw 'Invalid type';
				values['type'] = type;
			}
			if (typeId === 4) {
				if (!usability) throw 'usability is missing';
				values['usability'] = usability;
			}

			return res.status(200).json({
				product: await sequelize.Product.create(values, { include: 'ProductType' }),
			});
		} catch (err) {
			return await res.status(400).json({ error: err });
		}
	},

	async updateProduct(req, res) {
		try {
			const { productId } = req.params;
			const product = await sequelize.Product.findByPk(productId);

			if (!product) res.status(404).end();

			return res.status(200).json({
				product: await product.update(req.body, { include: 'ProductType' }),
			});
		} catch (err) {
			return await res.status(400).json({ error: err });
		}
	},

	async deleteProduct(req, res) {
		try {
			const { productId } = req.params;
			const product = await sequelize.Product.findByPk(productId);

			if (!product) res.status(404).end();

			product.destroy();

			return res.status(204).end();
		} catch (err) {
			return await res.status(400).json({ error: err });
		}
	},
};
