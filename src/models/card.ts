import {model, Schema, Document} from 'mongoose'

export interface ICard extends Document{
    date: Date;
}

const cardSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    }
});

export default model<ICard>('card', cardSchema);