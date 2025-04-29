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
    public async AllPostController({request,response,auth}:HttpContext){
        const user=await auth.authenticate()
        const userId = user.id
        const {page}=request.params();
        const posts=await this.postService.AllPostService(userId,page)
        // const serializedposts=posts.map(post=>post.serialize());
        return response.send(posts)
    }
    public async paginateController({response}:HttpContext){
        const res=await this.postService.paginateService()
        response.send(res)
    }
    
}