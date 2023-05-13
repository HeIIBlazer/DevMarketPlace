module.exports = app => {
    const controller = require('../Controllers/comment.Controller');
    const router = require('express').Router();

    router.get('/', controller.getComments);
    router.post('/', controller.CreateComment);
    router.put('/', controller.UpdateComment);
    router.delete('/', controller.DeleteComment);

    app.use('/api/comment', router);
}