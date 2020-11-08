import {Request, Response} from 'express'
import CardList from '../models/card-list'

export const getCardLists = async (req: Request, res: Response) => {
    let cardLists = await  CardList.find();
    return res.status(200).json(cardLists);
}

export const getCardListById = async (req: Request, res: Response) => {
    let cardListById = await  CardList.findById(req.params);
    return res.status(200).json(cardListById);
}