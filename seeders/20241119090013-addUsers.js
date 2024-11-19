'use strict';

const { v4: uuidv4 } = require('uuid');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const part  = 100000;
    const total = 1100000;
    for(let i = 0; i < total; i+=part) {
      const users = []

      for (let j = 0; j < part; j++) {

        users.push({
          uuid: uuidv4(),
          name: 'IVAN',
          surname: 'IVANOV',
          gender: Math.random()<0.5 ? 'Ж': 'М',
          problem: Math.random()<0.5,
        })
      }
      console.log(i);
      await queryInterface.bulkInsert('Users', users);
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
