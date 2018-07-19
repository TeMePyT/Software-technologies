const Sequelize = require('sequelize');

module.exports = function(sequelize) {
    const Comment = sequelize.define('Comment', {

        content: {
            type: Sequelize.STRING,
            allowNull: false,
            required: true
        },

    });
    Comment.associate = function (models){
        Comment.belongsTo(models.User, {
            foreignKey:'authorId',
            targetKey:'id'
        });
        Comment.belongsTo(models.Article, {
            foreignKey:'articleId',
            targetKey:'id'
        });
    };

    return Comment;
}