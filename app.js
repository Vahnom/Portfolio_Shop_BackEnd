import express from 'express';
// import bodyParser from 'body-parser';
import productRoutes from './routes/productRoutes.js'
import cors from 'cors';

const APP = express();

// APP.use(bodyParser.json())
APP.use(cors());
APP.use(express.json());
APP.use('/products', productRoutes)


APP.get('/', (req,res) => {res.send('Hello from Home Page');})


try {
    console.log('Connection to DataBase Succeeded')
} catch (err) {
    console.log(`error: ${err}`)
}




export const server = APP.listen(4000,() =>{
    console.log('Server running in http://localhost:4000/')
    } )




