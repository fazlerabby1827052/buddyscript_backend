import CommentQuery from "./comment_query.js";

export default class CommentService{
    private commentQuery:CommentQuery
    constructor(){
        this.commentQuery=new CommentQuery()
    }
    public async CommentAPostService(data:{postId:number,text:string},userId:number){
        return await this.commentQuery.CommentAPost(data.postId,userId,data.text)
    }
    public async CommentOfAPostService(data:{postId:number}){
        return await this.commentQuery.CommentOfAPostQuery(data.postId)
    }
    public async NumberOfCommentOfAPostService(data:{postId:number}){
        return await this.commentQuery.NumberOfCommentOfAPost(data.postId)
    }
}