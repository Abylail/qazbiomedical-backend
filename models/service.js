module.exports = (sequelize, Sequelize) => sequelize.define("service", {
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    }
})