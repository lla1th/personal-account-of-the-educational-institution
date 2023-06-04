module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('group', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        onDelete: 'cascade',
      },
      short_name: {
        type: Sequelize.STRING(),
      },
      full_name: {
        type: Sequelize.STRING(),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.createTable('students_group', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        onDelete: 'cascade',
      },
      user_id: {
        type: Sequelize.UUID(),
      },
      well_id: {
        type: Sequelize.UUID(),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
};
