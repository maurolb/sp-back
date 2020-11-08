import {Request, Response} from 'express'
import Card from '../models/card'
import List from '../models/list'

export const getCards = async (req: Request, res: Response) => {
    let cards = await  Card.find();
    return res.status(200).json(cards);
}

export const getCardById = async (req: Request, res: Response) => {
    let cardById = await  Card.findById(req.params);
    return res.status(200).json(cardById);
}

export const addCard = async (req: Request, res: Response) => {
    let newCard = new Card();
    await newCard.save();
    return res.status(201).json(newCard);
}

export const updateCard = async (req: Request, res: Response) => {
    const updated = await Card.updateOne({"_id": req.params}, {"date": req.body.date});
    return res.status(201).json(updated);
}

export const deleteCard = async(req: Request, res: Response) => {
    let deletedCard = await  Card.deleteOne({"_id": req.params});
    let deletedList = await List.deleteMany({"cardId": req.params})
    return res.status(200).json({message: 'Deleted', deletedCard, deletedList});
}