import {addToCart, removeProduct, updateQuantity} from '../Controller/cart.controller.js'
import {authenticateUser} from '../Controller/user.controller.js'

export function cartRoutes(app){
    app.post('/api/cart/:id',authenticateUser,addToCart);

    app.put('/api/cart/:id',authenticateUser,updateQuantity);

    app.delete('/api/cart/:id',authenticateUser,removeProduct)
}

