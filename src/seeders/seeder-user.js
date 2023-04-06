'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: 'son123', // phải lưu bằnng hash password (mã  hoá)
      firstName: 'Toihoccode1405',
      lastName: 'Ryan',
      address: 'Hải Dương',
      phonenumber: '0123456789',
      gender: 1,
      image: '',
      roleId: 'R1',
      positionId: 'doctor',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
