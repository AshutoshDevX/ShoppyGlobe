import Product from './Model/products.model.js'
async function fetchData(){
    const a = await fetch("https://dummyjson.com/products");

    const data = await a.json();
    
    const items = data.products;
    
    items.forEach(async(item)=>{
        const {title,description,category,price,discountPercentage,rating,stock,reviews,images} = item;
        await Product.create({title,description,category,price,discountPercentage,rating,stock,reviews,images});
    }
    )
    console.log(items[20])
}

fetchData()
