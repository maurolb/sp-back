import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import listRoutes from './routes/list.routes'
import cardRoutes from './routes/card.routes'
import cardListRoutes from './routes/card.list.routes'

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
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
// Enable preflight requests for all routes
app.use(cors())
// app.options('*', cors(corsOptions));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
// app.get('/', cors(corsOptions), (req, res, next) => {
//     res.json({ message: 'This route is CORS-enabled for an allowed origin.' });
// })
app.use('/list', listRoutes);
app.use('/card', cardRoutes);
app.use('/card-list', cardListRoutes);


app.listen(app.get('port'), () =>{
    console.log('Server on por', app.get('port'))
})
export default app;