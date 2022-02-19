/** @format */

const { Sequelize } = require('sequelize');

const { database, username, password, host, dialect } = require('../config.json').development;

const sequelize = new Sequelize(database, username, password, {
	host: host,
	dialect: dialect,
	logging: false,
});

module.exports = { sequelize };
