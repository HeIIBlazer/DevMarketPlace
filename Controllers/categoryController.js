const Category = require('../models/category');

exports.getCategories = async (req, res) => {
    Category.findAll()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving categories'
            });
        })
}

exports.CreateCategory = async (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: 'Content can not be empty'
        });
        return;
    }

    const category = {
        title: req.body.title
    }

    Category.create(category)
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the category'
            });
        })
}

exports.UpdateCategory = async (req, res) => {
    Category.upsert({
        id: req.body.id,
        title: req.body.title,
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while updating the category'
        });
    })
}

exports.DeleteCategory = async (req, res) => {
    Category.destroy({
        where: {
            id: req.body.id
        }
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while deleting the category'
        });
    })
}
