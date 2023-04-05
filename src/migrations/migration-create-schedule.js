'use strict';
const { DataTypes } = require('sequelize');
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('schedules', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            currentNumber: {
                type: DataTypes.INTEGER,
            },
            maxNumber: {
                type: DataTypes.INTEGER,
            },
            date: {
                type: DataTypes.DATE,
            },
            timeType: {
                type: DataTypes.STRING,
            },
            doctorId: {
                type: DataTypes.INTEGER,
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
        await queryInterface.dropTable('schedules');
    }
};