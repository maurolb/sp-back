"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cardListSchema = new mongoose_1.Schema({
    date: {
        type: Date,
        required: true
    },
    list: {
        type: Array
    }
});
exports.default = mongoose_1.model('shoppingCard_list', cardListSchema);
