const Cart = require('../models/cart');

exports.getCarts = async (req, res) => {
    Cart.findAll()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving carts'
            });
        })
}

exports.CreateCart = async (req, res) => {
    if ( !req.body.userId || !req.body.productId || !req.body.create_at ) {
        res.status(400).send({
            message: 'Content can not be empty'
        });
        return;
    }

    const cart = {
        userId: req.body.userId,
        productId: req.body.productId,
        created_at: req.body.created_at
    }

    Cart.create(cart)
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the cart'
            });
        })
}

exports.UpdateCart = async (req, res) => {
    Cart.upsert({
        id: req.body.id,
        userId: req.body.userId,
        productId: req.body.productId,
        created_at: req.body.created_at
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while updating the cart'
        });
    })
}

exports.DeleteCart = async (req, res) => {
    Cart.destroy({
        where: {
            id: req.body.id
        }
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while deleting the cart'
        });
    })
}
