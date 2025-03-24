import { userSignUp,userLogIn } from "../Controller/user.controller.js";


export function userRoutes(app){
    app.post('/api/register',userSignUp);
    
    app.post("/api/login",userLogIn);
}

