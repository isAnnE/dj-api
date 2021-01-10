const Sequelize = require("sequelize");
const {
    sequelize
} = require("../models");

const Sequelize = new Sequelize("dj-api", "root, "
",{
host: "127.0.1",
dialect: "mysql",
operatorsAliases: false

});

module.exports = sequelize;
global.sequelize = sequelize;