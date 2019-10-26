'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Todos',
    [
      {
        title: 'Wake Up',
        description: 'Prepare for the day',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Stop by Starbucks',
        description: 'Help colleague order coffee',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Todos', null, {});
  }
};
