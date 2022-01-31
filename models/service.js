module.exports = (sequelize, Sequelize) => {
    const Service = sequelize.define("service", {
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
    return Service;
}