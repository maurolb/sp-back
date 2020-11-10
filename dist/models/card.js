"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cardSchema = new mongoose_1.Schema({
    date: {
        type: Date,
        default: Date.now
    }
});
exports.default = mongoose_1.model('card', cardSchema);
