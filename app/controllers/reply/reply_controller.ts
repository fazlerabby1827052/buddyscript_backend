import ReplyService from "./reply_service.js";
import { HttpContext } from "@adonisjs/core/http";
import { ReplyACommentValidator, ReplyOfACommentValidator } from "./reply_validator.js";

export default class ReplyConstroller{
    private replyService:ReplyService
    constructor(){
        this.replyService=new ReplyService()
    }
    public async ReplyACommentController({request,response,auth}:HttpContext){
        const payload=await request.validateUsing(ReplyACommentValidator)
        const user=await auth.authenticate()
        const reply=await this.replyService.ReplyACommentService(payload,user.id)
        return response.send(reply)
    }
    public async ReplyOfACommentController({request,response}:HttpContext){
        const payload=await request.validateUsing(ReplyOfACommentValidator)
        const reply=await this.replyService.ReplyOfACommentService(payload)
        return response.send(reply)
    }
}