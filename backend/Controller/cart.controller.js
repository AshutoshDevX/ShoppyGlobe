import Product from '../Model/products.model.js'
import Cart from '../Model/cart.model.js'


export async function addToCart(req,res){
    const productId = req.params.id;

    try{
        const product  = await Product.findOne({_id:productId});
        const item  = await Cart.findOne({_id:productId});
        const {_id,title,description,category,price,discountPercentage,reviews,images,rating} = product

        if(item){
            await Cart.updateOne({_id:productId},{quantity:item.quantity+1})
        }
        else{
            await Cart.create({
                _id:_id,
                title:title,
                description:description,
                category:category,
                price:price,
                discount:discountPercentage,
                rating:rating,
                review:reviews[0],
                image:images[0],
                quantity:1,
            })
        }
    }
    catch(err){
        res.status(400).json({
            error:err,
            message:"Opps! something went wrong",
        })
    }

    res.status(201).json({
        message:"Product Successfully Added"
    })
}

export async function updateQuantity(req,res){
    const productId = req.params.id;

    if(!productId){
        return req.status(404).json({
            message:"Not Found"
        })
    }

    try{
        await Cart.updateOne({_id:productId},{quantity:req.body.quantity})
    }
    catch(err){
        res.status(400).json({
            message:"Something went wrong"
        })
    }

    res.status(200).json({
        message:"qauntity updated successfully"
    })

}

export async function removeProduct(req,res){
    const bookId = req.params.id;
    
    const deletedProduct = await Cart.deleteOne({_id:bookId})

    if (!deletedProduct) {
        return res.status(404).json({
            message: "book with this id does not exists"
        })
    }

    res.status(200).json({
        message:"Product deleted Successfully"
    });
}