import {Router} from 'express'
const router = Router();

import {getProducts, addProduct, updateProduct, deleteProduct, getProductById} from '../controllers/list.controller'

router.get('/', getProducts);
router.get('/:_id', getProductById);
router.post('/:_id', addProduct);
router.put('/:_id', updateProduct);
router.delete('/:_id', deleteProduct);

export default router;