'use strict';
const { DataTypes } = require('sequelize');
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('bookings', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            statusId: {
                type: DataTypes.STRING,
            },
            doctorId: {
                type: DataTypes.INTEGER,
            },
            patientId: {
                type: DataTypes.INTEGER,
            },
            date: {
                type: DataTypes.DATE,
            },
            timeType: {
                type: DataTypes.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('bookings');
    }
};