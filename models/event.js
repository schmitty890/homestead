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
      defaultValue: "None",
      validate: {
        len: [1,1000]
      }
    },
    category: {
      type: Sequelize.STRING,
      notEmpty: true,
      defaultValue: "Other",
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
      type: Sequelize.DATE,
      notEmpty: true
    },
    endDate: {
      type: Sequelize.STRING
      // validate: {
      //   isAfter(end) {
      //     if (moment(end).subtract(moment(this.date)) < 0) {
      //       throw new Error('Enter a date or time after the start time');
      //       // we also are in the model's context here, so this.otherField
      //       // would get the value of otherField if it existed
      //     }
      // //   }
      // }
    },
    allDay: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  });
  return Event;
}
