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
// const allowedOrigins = [
//     'capacitor://localhost',
//     'ionic://localhost',
//     'http://localhost',
//     'http://localhost:8080',
//     'http://localhost:8100'
// ];
// const corsOptions = {
//     origin: (origin: any, callback: any) => {
//         if (allowedOrigins.includes(origin) || !origin) {
//             callback(null, true);
//         } else {
//             callback(new Error('Origin not allowed by CORS'));
//         }
//     }
// }
// Initializations
const app = express_1.default();
// Settings
app.set('port', process.env.PORT || 3000);
// Middlewares
// Enable preflight requests for all routes
app.use(cors_1.default());
// app.options('*', cors(corsOptions));
app.use(morgan_1.default('dev'));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
// Routes
// app.get('/', cors(corsOptions), (req, res, next) => {
//     res.json({ message: 'This route is CORS-enabled for an allowed origin.' });
// })
app.use('/list', list_routes_1.default);
app.use('/card', card_routes_1.default);
app.use('/card-list', card_list_routes_1.default);
app.listen(app.get('port'), () => {
    console.log('Server on por', app.get('port'));
});
exports.default = app;
