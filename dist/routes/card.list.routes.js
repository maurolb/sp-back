"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const card_list_controller_1 = require("../controllers/card.list.controller");
router.get('/', card_list_controller_1.getCardLists);
router.get('/:_id', card_list_controller_1.getCardListById);
exports.default = router;
