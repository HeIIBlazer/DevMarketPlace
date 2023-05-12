const Product = require('../models/product');

exports.getProducts = async (req, res) => {
    Product.findAll()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving products'
            });
        })
}

exports.CreateProduct = async (req, res) => {
    if (!req.body.name || !req.body.price || !req.body.description || !req.body.category || !req.body.image) {
        res.status(400).send({
            message: 'Content can not be empty'
        });
        return;
    }

    const product = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image
    }

    Product.create(product)
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the product'
            });
        })
}

exports.UpdateProduct = async (req, res) => {
    Product.upsert({
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while updating the product'
        });
    })
}

exports.DeleteProduct = async (req, res) => {
    Product.destroy({
        where: {
            id: req.body.id
        }
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while deleting the product'
        });
    })
}