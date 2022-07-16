const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const { 
    productsPost,
    productsGet,
    productsPut,
    productsDelete
} = require('../controllers/products');
const { productExists } = require('../helpers/products');

const router = Router();

const validateAll = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json(errors);

    next();
}

router.post('/', [
    check('name').notEmpty(),
    check('name').isString(),
    check('price', 'The price must be numeric').isNumeric(),
    check('price').isNumeric({ min: 0, max: 2000 }),
    check('description').notEmpty(),
    check('description').isString(),
    validateAll
], productsPost);
router.get('/:id', [
    check('id').custom(productExists),
    check('id').notEmpty(),
    check('id').isMongoId(),
    validateAll
], productsGet);
router.put('/:id', [
    check('id').custom(productExists),
    check('id').notEmpty(),
    check('id').isMongoId(),
    check('name').notEmpty(),
    check('name').isString(),
    check('price', 'The price must be numeric').isNumeric(),
    check('price').isNumeric({ min: 0, max: 2000 }),
    check('description').notEmpty(),
    check('description').isString(),
    validateAll
], productsPut);
router.delete('/:id', [
    check('id').custom(productExists),
    check('id').notEmpty(),
    check('id').isMongoId(),
    validateAll
], productsDelete);

module.exports = router;
