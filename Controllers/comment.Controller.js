const Comment = require('../models/comment');

exports.getComments = async (req, res) => {
    Comment.findAll()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving comments'
            });
        })
}

exports.CreateComment = async (req, res) => {
    if ( !req.body.userId || !req.body.productId || !req.body.text ) {
        res.status(400).send({
            message: 'Content can not be empty'
        });
        return;
    }

    const comment = {
        userId: req.body.userId,
        productId: req.body.productId,
        text: req.body.text
    }

    Comment.create(comment)
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the comment'
            });
        })
}

exports.UpdateComment = async (req, res) => {
    Comment.upsert({
        id: req.body.id,
        userId: req.body.userId,
        productId: req.body.productId,
        text: req.body.text
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while updating the comment'
        });
    })
}

exports.DeleteComment = async (req, res) => {
    Comment.destroy({
        where: {
            id: req.body.id
        }
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while deleting the comment'
        });
    })
}

