"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config/config"));
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    dbName: config_1.default.DB.DBNAME,
    user: config_1.default.DB.USER,
    pass: config_1.default.DB.PASSWORD
};
mongoose_1.default.connect(config_1.default.DB.URI, dbOptions);
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log('Mongodb connection stabilished');
});
connection.on('error', err => {
    console.log(err);
    process.exit();
});