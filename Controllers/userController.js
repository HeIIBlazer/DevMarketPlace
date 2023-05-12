const User = require('../models/user');
const { Op } = require('sequelize');

exports.getUsers = async (req, res) => {
    User.findAll()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving users'
            });
        })
}

exports.CreateUser = async (req, res) => {
    if (!req.body.username || !req.body.email || !req.body.password || !req.body.salt || !req.body.registration_date || !req.body.role) {
        res.status(400).send({
            message: 'Content can not be empty'
        });
        return;
    }

    const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        salt: req.body.salt,
        registration_date: req.body.registration_date,
        role: req.body.role
    }

    User.create(user)
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the user'
            });
        })
}

exports.UpdateUser = async (req, res) => {
    Worker.upsert({
        id: req.body.id,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        salt: req.body.salt,
        registration_date: req.body.registration_date,
        role: req.body.role
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while updating the user'
        });
    })
}

exports.DeleteUser = async (req, res) => {
    if (!req.body.id) {
        res.status(400).send({
            message: 'Content can not be empty'
        });
        return;
    }

    Worker.destroy({
        where: {
            id: req.body.id
        }
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while deleting the user'
        });
    })
}
