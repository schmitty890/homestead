module.exports = function(sequelize, Sequelize) {
  const User = sequelize.define('user', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    firstname: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    lastname: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    username: {
      type: Sequelize.TEXT
    },
    about: {
      type: Sequelize.TEXT
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    last_login: {
      type: Sequelize.DATE
    },
    account_type: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "user"
    },
    dues: {
      type: Sequelize.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    status: {
      type: Sequelize.ENUM('active', 'inactive'),
      defaultValue: 'active'
    }
  });
  return User;
}