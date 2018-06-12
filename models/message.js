module.exports = function(sequelize, Sequelize) {
  var Message = sequelize.define('message', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    author_id: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    name: {
      type: Sequelize.STRING,
      notEmpty: true,
      validate: {
        len: [1,100]
      }
    },
    subject: {
      type: Sequelize.STRING,
      notEmpty: true,
      validate: {
        len: [1,100]
      }
    },
    category: {
      type: Sequelize.STRING,
      notEmpty: true,
    },    
    message: {
      type: Sequelize.TEXT,
      notEmpty: true,
      validate: {
        len: [1,2000]
      }
    },
    viewed: {
      type: Sequelize.BOOLEAN,
      notEmpty: true,
      defaultValue: false,
    },
    saved: {
      type: Sequelize.BOOLEAN,
      notEmpty: true,
      defaultValue: false,
    },
    date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  });
  return Message;
}
