module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cabinets', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        onDelete: 'cascade',
      },
      name: {
        type: Sequelize.STRING(),
      },
      deactivated: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.createTable('lessons', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        onDelete: 'cascade',
      },
      name: {
        type: Sequelize.STRING(),
      },
      deactivated: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.createTable('evaluations', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        onDelete: 'cascade',
      },
      lesson_id: {
        type: Sequelize.UUID,
        references: {
          key: 'id',
          model: 'lessons',
        },
      },
      well_id: {
        type: Sequelize.UUID,
      },
      group_id: {
        type: Sequelize.UUID,
      },
      student_id: {
        type: Sequelize.UUID,
      },
      evaluation: {
        type: Sequelize.UUID,
      },
      message: {
        type: Sequelize.STRING(),
      },
      deactivated: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.createTable('schedule', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        onDelete: 'cascade',
      },
      cabinet_id: {
        type: Sequelize.UUID,
        references: {
          key: 'id',
          model: 'cabinets',
        },
      },
      lesson_id: {
        type: Sequelize.UUID,
        references: {
          key: 'id',
          model: 'lessons',
        },
      },
      teacher_id: {
        type: Sequelize.UUID,
      },
      group_id: {
        type: Sequelize.UUID,
      },
      date: {
        type: Sequelize.DATE,
      },
      pair: {
        type: Sequelize.INTEGER,
      },
      self_training: {
        type: Sequelize.BOOLEAN,
      },
      sub_group: {
        type: Sequelize.INTEGER,
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
