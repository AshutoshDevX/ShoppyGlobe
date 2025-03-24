import express from 'express';
import {productRoutes} from './Routes/products.routes.js';
import {cartRoutes} from './Routes/cart.routes.js';
import {userRoutes} from './Routes/user.routes.js';


const app = express();

app.use(express.json());

productRoutes(app);
cartRoutes(app);
userRoutes(app);

app.listen(5100,()=>
    console.log("Server is running on port 5100")
)