module.exports = (sequelize, Sequelize) => sequelize.define("service", {
    title: {
        type: Sequelize.TEXT
    },
    description: {
        type: Sequelize.TEXT
    },
    content: {
        type: Sequelize.TEXT
    },
    image: {
        type: Sequelize.TEXT
    }
})