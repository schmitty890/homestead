module.exports = function(sequelize, Sequelize) {
  const classifieds = sequelize.define('classifieds', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    author_id: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    username: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.TEXT,
      notEmpty: true
    },
    email: {
      type: Sequelize.STRING,
      notEmpty: true,
      validate: {
        isEmail: true
      }
    },
    phone: {
      type:Sequelize.TEXT,
      notEmpty: true
    },
    title: {
      type: Sequelize.STRING,
      notEmpty: true,
      validate: {
        len: [1,50]
      }
    },
    price: {
      type: Sequelize.INTEGER,
      notEmpty: true,

    },
    details: {
      type: Sequelize.TEXT,
      notEmpty: true,
      validate: {
        len: [1,1000]
      }
    },
    date_added: {
      type: Sequelize.DATE
    },
    category: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    condition: {
      type: Sequelize.STRING,
      notEmpty: true
    },
  });
  return classifieds;
} 
  