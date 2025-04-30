import CommentService from "./comment_service.js";
import { HttpContext } from "@adonisjs/core/http";
import { CommentAPostValidator, CommentOfAPostValidator } from "./comment_validator.js";
export default class CommentController{
    private commentService:CommentService
    constructor(){
        this.commentService=new CommentService()
    }

    public async  CommentAPostController({request,response,auth}:HttpContext){
        const payload=await request.validateUsing(CommentAPostValidator)
        const user=await auth.authenticate()
        const comment=await this.commentService.CommentAPostService(payload,user.id)
        return response.send(comment)

    }

    public async CommentOfAPostController({request,response}:HttpContext){
        
        const {page,post}=request.params();
        const comment= await this.commentService.CommentOfAPostService(post,page)
        response.send(comment)
    }
    public async NumberofCommentOfAPostController({request,response}:HttpContext){
        const payload=await request.validateUsing(CommentOfAPostValidator)
        const numberofcomment= await this.commentService.NumberOfCommentOfAPostService(payload)
        return response.send(numberofcomment)
    }
}