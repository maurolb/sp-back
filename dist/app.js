"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const list_routes_1 = __importDefault(require("./routes/list.routes"));
const card_routes_1 = __importDefault(require("./routes/card.routes"));
const card_list_routes_1 = __importDefault(require("./routes/card.list.routes"));
// Initializations
const app = express_1.default();
// Settings
app.set('port', process.env.PORT || 3000);
// Middlewares
app.use(morgan_1.default('dev'));
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
// Routes
app.get('/', (req, res) => {
    res.send(`THE API is at http://localhost:${app.get('port')}`);
});
app.use('/list', list_routes_1.default);
app.use('/card', card_routes_1.default);
app.use('/card-list', card_list_routes_1.default);
exports.default = app;
