const Tag = require('../models/tag');

exports.getTags = (req, res) => {
    Tag.find()
        .then(data => {
            res.send(data);
        }).catch (err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving tags'
            });
        }
    )
    }

exports.CreateTag = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: 'Content can not be empty'
        });
        return;
    }

    const tag = {
        name: req.body.name
    }

    Tag.create(tag)
        .then(data => {
            res.send(data);
        }).catch (err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the tag'
            });s
        }
    )
}

exports.UpdateTag = (req, res) => {
    Tag.upsert({
        id: req.body.id,
        title: req.body.title,
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while updating the tag'
        });
    })
}

exports.DeleteTag = (req, res) => {
    Tag.destroy({
        where: {
            id: req.body.id
        }
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while deleting the tag'
        });
    })
}
