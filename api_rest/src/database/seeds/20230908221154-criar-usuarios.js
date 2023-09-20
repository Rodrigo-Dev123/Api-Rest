const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users',
      [
        {
          nome: 'Rodrigo',
          email: 'rodrigo1@gmail.com',
          password_hash: await bcryptjs.hash('1234567', 8),
          created_at: new Date(),
          updated_at: new Date(),

        },
        {
          nome: 'Rodrigo 2',
          email: 'rodrigo2@gmail.com',
          password_hash: await bcryptjs.hash('1234567', 8),
          created_at: new Date(),
          updated_at: new Date(),

        },
        {
          nome: 'Rodrigo 3',
          email: 'rodrigo3@gmail.com',
          password_hash: await bcryptjs.hash('1234567', 8),
          created_at: new Date(),
          updated_at: new Date(),

        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) { }
};
