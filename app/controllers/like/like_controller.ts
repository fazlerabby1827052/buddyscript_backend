import LikeService from "./like_service.js";
import { HttpContext } from "@adonisjs/core/http";
import { LikeAPostValidator, LikeCheckValidator, LikeCountValidator } from "./like_validator.js";
export default class LikeController{
    private likeService:LikeService
    constructor(){
        this.likeService= new LikeService()
    }
    public async LikeAPostController({request,response,auth}:HttpContext){
        const payload= await request.validateUsing(LikeAPostValidator)
        const user=await auth.authenticate()
        const like=await this.likeService.LikeAPostService(payload,user.id)
        return response.send(like)
    }
    public async LikeRemoveController({request,response,auth}:HttpContext){
        const payload= await request.validateUsing(LikeAPostValidator)
        const user=await auth.authenticate()
        const like=await this.likeService.RemoveLikeService(payload,user.id)
        return response.send(like)
    }
    public async LikeCountController({request,response,auth}:HttpContext){
        const payload=await request.validateUsing(LikeCountValidator)
        const user=await auth.authenticate()
        const numberOfLike= await this.likeService.LikeCountService(payload)
        response.send(numberOfLike)
        
    }
    public async PostLikerNameController({request,response}:HttpContext){
        const payload=await request.validateUsing(LikeCountValidator)
        const numberOfLike= await this.likeService.PostLikerNameService(payload)
        response.send(numberOfLike)
        
    }
    public async LikeCheckController({request,response,auth}:HttpContext){
        const payload= await request.validateUsing(LikeCheckValidator)
        const user=await auth.authenticate()
        const checklike=await this.likeService.likecheckService(payload,user.id)
        response.send(checklike)
    }
}