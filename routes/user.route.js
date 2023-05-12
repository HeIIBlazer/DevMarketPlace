module.exports = app => {
    const controller = require('./controllers/user.controller.js');
    const router = require('express').Router();

    router.get('/', controller.getUsers);
    router.post('/', controller.CreateUser);
    router.put('/', controller.UpdateUser);
    router.delete('/', controller.DeleteUser);

    app.use('/api/user', router);
}