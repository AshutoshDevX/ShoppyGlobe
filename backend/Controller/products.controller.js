import Product from '../Model/products.model.js'
export async function getProduct(req,res){
    const productId = req.params.id;
    let product;
    if(!productId){
        return req.status(404).json({
            message:"Not Found"
        })
    }
    try{
       product =  await Product.findOne({_id:productId});
    }
    catch(err){
        res.status(400).json({
            message:"Something went wrong",
        })
    }
    res.status(200).send(product);
}

