const Product_Category = require('../models/product_category');

exports.getProduct_Category = (req, res) => {
    Product_Category.find()
        .then(data => {
            res.send(data);
        }).catch (err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving product_category'
            });
        }
    )
    }

exports.CreateProduct_Category = (req, res) => {
    if (!req.body.productId || !req.body.categoryId) {
        res.status(400).send({
            message: 'Content can not be empty'
        });
        return;
    }

    const product_category = {
        productId: req.body.productId,
        categoryId: req.body.categoryId
    }

    Product_Category.create(product_category)
        .then(data => {
            res.send(data);
        }).catch (err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the product_category'
            });
        }
    )
}

exports.UpdateProduct_Category = (req, res) => {
    Product_Category.upsert({
        id: req.body.id,
        productId: req.body.productId,
        categoryId: req.body.categoryId
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while updating the product_category'
        });
    })
}

exports.DeleteProduct_Category = (req, res) => {
    Product_Category.destroy({
        where: {
            id: req.body.id
        }
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while deleting the product_category'
        });
    })
}
