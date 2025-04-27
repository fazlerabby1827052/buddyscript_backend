import PostService from "./post_service.js";
import { HttpContext } from "@adonisjs/core/http";
import { CreatePostValidator, DeletePostValidator, UpdatePostValidator } from "./post_validator.js";

export default class PostController{
    private postService:PostService
    constructor(){
        this.postService=new PostService()
    }
    public async CreatePostController({request,response,auth}:HttpContext){

        const payload= await request.validateUsing(CreatePostValidator)
        const user=await auth.authenticate()
        const userId = user.id
        
        const post =await this.postService.CreatePostService(payload,userId)
        return response.send(post)
    }

    public async UpdatePostController({request,response,auth}:HttpContext){
        const payload= await request.validateUsing(UpdatePostValidator)
        const user=await auth.authenticate()
        const userId = user.id
        const post= await this.postService.UpdatePostService(payload,userId)
        return response.send(post)
    }
    public async DeletePostController({request,response,auth}:HttpContext){
        const payload= await request.validateUsing(DeletePostValidator)
        const user=await auth.authenticate()
        const userId = user.id
        const post= await this.postService.DeletePostService(payload,userId)
        return response.send(post)
    }
    public async AllPostController({response}:HttpContext){
        
        const posts=await this.postService.AllPostService()
        
        return response.send(posts)
    }
    
}