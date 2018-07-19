const Sequelize = require('sequelize');

module.exports = function(sequelize){
    const Article = sequelize.define('Article', {
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            required: true
        },
        content: {
            type: Sequelize.TEXT,
            allowNull: false,
            required: true
        },
        image: {
            type: Sequelize.TEXT,
            allowNull: false,
            required: false
        },
        date: {
            type: Sequelize.DATE,
            required: true,
            defaultValue: sequelize.NOW
        },
    });

    Article.associate = function (models){
        Article.belongsTo(models.User, {
            foreignKey:'authorId',
            targetKey:'id'
        });
        Article.hasMany(models.Comment, {
            foreignKey:'articleId',
            sourceKey:'id'
        });
    };
    return Article;
};