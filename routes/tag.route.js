module.exports = app => {
    const controller = require('../controllers/tag.controller.js');
    const router = require('express').Router();

    router.get('/', controller.getTags);
    router.post('/', controller.CreateTag);
    router.put('/', controller.UpdateTag);
    router.delete('/', controller.DeleteTag);

    app.use('/api/tag', router);
}