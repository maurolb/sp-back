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
exports.deleteProduct = exports.updateProduct = exports.addProduct = exports.getProductById = exports.getProducts = void 0;
const list_1 = __importDefault(require("../models/list"));
const card_1 = __importDefault(require("../models/card"));
exports.getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let products = yield list_1.default.find();
    return res.status(200).json(products);
});
exports.getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let productById = yield list_1.default.find({ "cardId": req.params._id });
    return res.status(200).json(productById);
});
exports.addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let card = yield card_1.default.findById(req.params);
    let newProduct = new list_1.default({
        cardId: card === null || card === void 0 ? void 0 : card._id,
        productName: req.body.productName.toLowerCase(),
        productQuantity: req.body.productQuantity,
        productPrice: req.body.productPrice
    });
    yield newProduct.save();
    return res.status(201).json(newProduct);
});
exports.updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let productToUpdate = yield list_1.default.findById(req.params);
    let updatedProduct = {
        cardId: productToUpdate === null || productToUpdate === void 0 ? void 0 : productToUpdate.cardId,
        productName: req.body.productName.toLowerCase(),
        productQuantity: req.body.productQuantity,
        productPrice: req.body.productPrice
    };
    let updated = yield list_1.default.updateOne({ "_id": req.params }, { "cardId": updatedProduct.cardId, "productName": updatedProduct.productName, "productQuantity": updatedProduct.productQuantity, "productPrice": updatedProduct.productPrice });
    return res.status(200).json(updated);
});
exports.deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let deletedProduct = yield list_1.default.deleteOne({ "_id": req.params });
    return res.status(200).json(deletedProduct);
});
