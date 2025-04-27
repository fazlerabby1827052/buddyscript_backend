import User from "#models/user";

export default class UserQuery{
    public async CreateUserQuery(username:string,password:string){
        return await User.create({username,password})
    }

    public async GetUserQuery(username:string,password:string){
        return await User.verifyCredentials(username,password)
    }

    public async GetUserByUserNameQuery(username:string){
        return await User.query().where('username',username)
    }


}