import { HttpContext } from "@adonisjs/core/http";
import { UserRegisterValidator } from "./user_validator.js";
import UserService from "./user_service.js";
export default class UserController{
    private userService:UserService
    constructor(){
        this.userService=new UserService()
    }
    public async userCreate({request,response}:HttpContext){

        

        const payload=await request.validateUsing(UserRegisterValidator)
        const user=await this.userService.RegisterUserService(payload)
        return response.send(user)
    }

    

    public async LoginUser({request,response,auth}:HttpContext){

        
        const payload = await request.validateUsing(UserRegisterValidator)

        
        
        const user=await this.userService.LoginService(payload)
        await auth.use('web').login(user)
        response.send(user)
    }
    public async LogOut({auth,response}:HttpContext){
        await auth.use('web').logout()
        return response.send({message:'Logged out successfully'})
    }
    public async islogin({auth}:HttpContext){
        const user=auth.getUserOrFail()
        return user
    }
}