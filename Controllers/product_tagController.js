const Product_Tag = require('../models/product_category');

exports.getProduct_Tag = (req, res) => {
    Product_Tag.find()
        .then(data => {
            res.send(data);
        }).catch (err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving product_tag'
            });
        }
    )
}

exports.CreateProduct_Tag = (req, res) => {
    if (!req.body.productId || !req.body.tagId) {
        res.status(400).send({
            message: 'Content can not be empty'
        });
        return;
    }

    const product_tag = {
        productId: req.body.productId,
        tagId: req.body.tagId
    }

    Product_Tag.create(product_tag)
        .then(data => {
            res.send(data);
        }).catch (err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the product_tag'
            });
        }
    )
}

exports.UpdateProduct_Tag = (req, res) => {
    Product_Tag.upsert({
        id: req.body.id,
        productId: req.body.productId,
        tagId: req.body.tagId
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while updating the product_tag'
        });
    })
}

exports.DeleteProduct_Tag = (req, res) => {
    Product_Tag.destroy({
        where: {
            id: req.body.id
        }
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while deleting the product_tag'
        });
    })
}

