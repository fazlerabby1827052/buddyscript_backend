
import ReplyQuery from "./reply_query.js";

export default class ReplyService{
    private replyQuery:ReplyQuery
    constructor(){
        this.replyQuery= new ReplyQuery()
    }
    public async ReplyACommentService(data:{commentId:number,text:string},userId:number){
        return await this.replyQuery.ReplyACommentQuery(data.commentId,userId,data.text)
    }
    public async ReplyOfACommentService(data:{commentId:number}){
        return await this.replyQuery.ReplyOfACommentQuery(data.commentId)
    }
}