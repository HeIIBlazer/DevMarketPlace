module.exports = app => {
    const controller = require('../controllers/product_tag.controller.js');
    const router = require('express').Router();

    router.get('/', controller.getProduct_Tag);
    router.post('/', controller.CreateProduct_Tag);
    router.put('/', controller.UpdateProduct_Tag);
    router.delete('/', controller.DeleteProduct_Tag);

    app.use('/api/product_tag', router);
}