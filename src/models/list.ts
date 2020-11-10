import {model, Schema, Document} from 'mongoose'

export interface IList extends Document{
    productName: String;
    productQuantity: Number;
    productPrice: Number;
    cardId: any;
}

const listSchema = new Schema({
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
        type: Schema.Types.ObjectId,
        ref: 'shoppingCard'
    }
});

export default model<IList>('list', listSchema);