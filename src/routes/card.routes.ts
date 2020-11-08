import {Router} from 'express'
const router = Router();

import {getCards,getCardById, addCard, deleteCard, updateCard} from '../controllers/card.controller'

router.get('/', getCards);
router.get('/:_id', getCardById);
router.post('/', addCard);
router.put('/:_id', updateCard);
router.delete('/:_id', deleteCard);

export default router;