module.exports = app => {
    const controller = require('../controllers/product.controller');
    const router = require('express').Router();

    router.get('/', controller.getProducts);
    router.post('/', controller.CreateProduct);
    router.put('/', controller.UpdateProduct);
    router.delete('/', controller.DeleteProduct);

    app.use('/api/product', router);
}