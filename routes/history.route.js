module.exports = app => {
    const controller = require('../controllers/history.controller.js');
    const router = require('express').Router();

    router.get('/', controller.getHistory);
    router.post('/', controller.CreateHistory);
    router.put('/', controller.UpdateHistory);
    router.delete('/', controller.DeleteHistory);

    app.use('/api/history', router);
}