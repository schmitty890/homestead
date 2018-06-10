module.exports = function(sequelize, Sequelize) {
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
    //will try to implement via
    ///association with user
    ///storing these (again)
    ///seems suboptimal
    ///
    // author_name: {
    //   type: Sequelize.STRING,
    //   notEmpty: true
    // },
    // username: {
    //   type: Sequelize.TEXT
    // },
    // email: {
    //   type: Sequelize.STRING,
    //   validate: {
    //     isEmail: true
    //   }
    // },
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
    //do we want a price?
    //or maybe something like "proposed trade"?
    price: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      validate: {
        isInt: true
      }
    },
    category: {
      type: Sequelize.ENUM('services needed','services offered','items needed','items offered'),
      notEmpty: true
    },
    //with the wide variety
    //of services/items we'll have
    //ENUM seems too cumbersome
    //STRING for now
    condition: {
      type: Sequelize.STRING,
      defaultValue: null
    }
  });
  return Resource;
}