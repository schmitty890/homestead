module.exports = function(sequelize, Sequelize) {
  var Event = sequelize.define('event', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    author_id: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    title: {
      type: Sequelize.STRING,
      notEmpty: true,
      validate: {
        len: [1,50]
      }
    },
    description: {
      type: Sequelize.TEXT,
      notEmpty: true,
      validate: {
        len: [1,1000]
      }
    },
    category: {
      type: Sequelize.STRING,
      notEmpty: true,
      validate: {
        len: [1,50]
      }
    },
    location: {
      type: Sequelize.TEXT,
      notEmpty: true,
      validate: {
        len: [1, 250]
      }
    },
    date: {
      type: Sequelize.DATE
    }
  });
  return Event;
}
