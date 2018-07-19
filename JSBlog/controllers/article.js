const Article = require('../models').Article;
const User = require('../models').User;
const Comment=require('../models').Comment;

module.exports = {
    createGet: (req, res) => {
        res.render('article/create');
    },
    createPost: (req, res) => {
        let articleArgs = req.body;
        let errorMsg = '';
        if (!req.isAuthenticated) {
            errorMsg = 'You have to be logged to create articles!';
        } else if (!articleArgs.title) {
            errorMsg = 'Invalid title!';
        } else if (!articleArgs.content) {
            errorMsg = 'Invalid content!';
        }

        if (errorMsg) {
            articleArgs.error = errorMsg;
            res.render('article/create', articleArgs);
            return;
        }
        articleArgs.authorId = req.user.id;

        Article.create(articleArgs).then(article => {
            res.redirect('/');
        }).catch(err => {
            console.log(err.message);
            res.render('article/create', {error: err.message});
        });
    },

    detailsGet: (req, res) => {
        let id = req.params.id;

        Article.findById(id, {
            include: [
                {model: User}, {model: Comment, include: [User]}
            ]
        }).then(article => {
            res.render('article/details', {article})
        });
    },

    commentAddPost: (req, res) => {
    let body=req.body;
    let author=req.user;
    let articleId=req.params.articleId;

    let comment={
        content:body.content,
        authorId:author.id,
        articleId:articleId,

    };
    Comment.create(comment).then(()=>{
        res.redirect(`/article/details/${articleId}`)
    })
},

};
