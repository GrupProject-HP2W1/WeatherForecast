'use strict';
const bcrypt = require('bcrypt')

class User extends sequelize.Sequelize.Model { }

User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Please Enter Your Email Address'
      }, notEmpty: {
        args: true,
        msg: 'email can not be empty!'
      }
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: {
        msg: 'Please Enter Your Email Address'
      }, notEmpty: {
        args: true,
        msg: 'email can not be empty!'
      }
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Please Enter Your Email Address'
      }, notEmpty: {
        args: true,
        msg: 'password can not be empty!'
      }
    }
  }

}, {
  hooks: {
    beforeCreate: (instance, option) => {
      return bcrypt.hash(instance.password, 10).then(result => {
        instance.password = result
      })
        .catch(err => {
          console.log('Error Hashing Password')
        })
    }
  },
  sequelize
})

User.associate = function (models) {
  User.hasMany( models.History, ({foreignKey: 'user_id'}) )
};
