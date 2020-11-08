import {model, Schema, Document} from 'mongoose'
import { IList } from './list';

export interface ICardList extends Document{
    date: Date;
    list: Array<IList>;
}

const cardListSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    list: {
        type: Array
    }

});

export default model<ICardList>('shoppingCard_list', cardListSchema, 'shoppingCard_list');