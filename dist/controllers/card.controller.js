"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCard = exports.updateCard = exports.addCard = exports.getCardById = exports.getCards = void 0;
const card_1 = __importDefault(require("../models/card"));
const list_1 = __importDefault(require("../models/list"));
exports.getCards = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cards = yield card_1.default.find();
    return res.status(200).json(cards);
});
exports.getCardById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cardById = yield card_1.default.findById(req.params);
    return res.status(200).json(cardById);
});
exports.addCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let newCard = new card_1.default();
    yield newCard.save();
    return res.status(201).json(newCard);
});
exports.updateCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updated = yield card_1.default.updateOne({ "_id": req.params }, { "date": req.body.date });
    return res.status(201).json(updated);
});
exports.deleteCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let deletedCard = yield card_1.default.deleteOne({ "_id": req.params });
    let deletedList = yield list_1.default.deleteMany({ "cardId": req.params });
    return res.status(200).json({ message: 'Deleted', deletedCard, deletedList });
});
