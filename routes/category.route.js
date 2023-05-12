module.exports = app => {
    const controller = require('../controllers/category.Controller.js');
    const router = require('express').Router();

    router.get('/', controller.getCategories);
    router.post('/', controller.CreateCategory);
    router.put('/', controller.UpdateCategory);
    router.delete('/', controller.DeleteCategory);

    app.use('/api/category', router);
}