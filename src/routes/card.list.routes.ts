import {Router} from 'express'
const router = Router();

import {getCardLists,getCardListById} from '../controllers/card.list.controller'

router.get('/', getCardLists);
router.get('/:_id', getCardListById);

export default router;