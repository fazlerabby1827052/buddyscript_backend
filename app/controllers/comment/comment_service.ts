import CommentQuery from "./comment_query.js";

export default class CommentService{
    private commentQuery:CommentQuery
    constructor(){
        this.commentQuery=new CommentQuery()
    }
    public async CommentAPostService(data:{postId:number,text:string},userId:number){
        return await this.commentQuery.CommentAPost(data.postId,userId,data.text)
    }
    public async CommentOfAPostService(postId:number,page:number){
        return await this.commentQuery.CommentOfAPostQuery(postId,page)
    }
    public async NumberOfCommentOfAPostService(data:{postId:number}){
        return await this.commentQuery.NumberOfCommentOfAPost(data.postId)
    }
}