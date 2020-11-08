import {Request, Response} from 'express'
import List from '../models/list'
import Card from '../models/card'

export const getProducts = async (req: Request, res: Response) => {
    let products = await  List.find();
    return res.status(200).json(products);
}

export const getProductById = async (req: Request, res: Response) => {
    let productById = await  List.find({"cardId": req.params._id});
    return res.status(200).json(productById);
}

export const addProduct = async (req: Request, res: Response) => {
    let card = await Card.findById(req.params);

    let newProduct = new List({
        cardId : card?._id,
        productName : req.body.productName.toLowerCase(),
        productQuantity : req.body.productQuantity,
        productPrice : req.body.productPrice
    })
    await newProduct.save();
    return res.status(201).json(newProduct);
}

export const updateProduct = async (req: Request, res: Response) => {
    let productToUpdate = await List.findById(req.params);

    let updatedProduct = {
        cardId: productToUpdate?.cardId,
        productName: req.body.productName.toLowerCase(),
        productQuantity: req.body.productQuantity,
        productPrice: req.body.productPrice
    }

    let updated = await  List.updateOne({"_id": req.params}, {"cardId": updatedProduct.cardId, "productName": updatedProduct.productName, "productQuantity": updatedProduct.productQuantity, "productPrice": updatedProduct.productPrice});
    return res.status(200).json(updated);
}

export const deleteProduct = async(req: Request, res: Response) => {
    let deletedProduct = await  List.deleteOne({"_id": req.params});
    return res.status(200).json(deletedProduct);
}