import { Exception } from "@adonisjs/core/exceptions"
import UserQuery from "./user_query.js"

export default class UserService{
    private userQuery:UserQuery
    constructor(){
        this.userQuery=new UserQuery()
    }

    public async RegisterUserService(data:{username:string , password:string}){
        const isUserAlreadyExists= await this.userQuery.GetUserByUserNameQuery(data.username)
        if(isUserAlreadyExists.length!==0){
            throw new Exception('User already Exist',{
                status:409,
                code:'USER_ALREADY_EXISTS'
            })
        }

        return await this.userQuery.CreateUserQuery(data.username,data.password)
    }

    public async LoginService(data:{username:string,password:string}){
        return this.userQuery.GetUserQuery(data.username,data.password)
    }

}