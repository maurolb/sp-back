"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const listSchema = new mongoose_1.Schema({
    productName: {
        type: String,
        required: true
    },
    productQuantity: {
        type: Number,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    cardId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'shoppingCard'
    }
});
exports.default = mongoose_1.model('list', listSchema);
