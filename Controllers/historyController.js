const History = require('../models/historyModel');

exports.getHistory = async (req, res) => {
    History.findAll()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving history'
            });
        })
}

exports.CreateHistory = async (req, res) => {
    if ( !req.body.userId || !req.body.productId || !req.body.create_at ) {
        res.status(400).send({
            message: 'Content can not be empty'
        });
        return;
    }

    const history = {
        userId: req.body.userId,
        productId: req.body.productId,
        created_at: req.body.created_at
    }

    History.create(history)
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the history'
            });
        })
}

exports.UpdateHistory = async (req, res) => {
    History.upsert({
        id: req.body.id,
        userId: req.body.userId,
        productId: req.body.productId,
        created_at: req.body.created_at
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while updating the history'
        });
    })
}

exports.DeleteHistory = async (req, res) => {
    History.destroy({
        where: {
            id: req.body.id
        }
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while deleting the history'
        });
    })
}
