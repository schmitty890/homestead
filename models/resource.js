module.exports = function (sequelize, Sequelize) {
  const Resource = sequelize.define('resource', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    author_id: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    // author_name: {
    //   type: Sequelize.STRING,
    //   notEmpty: true
    // },
    // username: {
    //   type: Sequelize.TEXT
    // },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    },
    title: {
      type: Sequelize.STRING,
      notEmpty: true,
      validate: {
        len: [1, 50]
      }
    },
    description: {
      type: Sequelize.TEXT,
      notEmpty: true,
      validate: {
        len: [1, 1000]
      }
    },
    category: {
      type: Sequelize.ENUM('services needed', 'services offered', 'items needed', 'items offered'),
      notEmpty: true
    },
  });
  return Resource;
}