import Product from '../Model/products.model.js'
import {getProduct} from '../Controller/products.controller.js'


export function productRoutes(app){
    app.get('/api/products/',async(req,res)=>{
        const products = await Product.find({});
        res.status(200).send(products);
    });

    app.get('/api/products/:id',getProduct);
}