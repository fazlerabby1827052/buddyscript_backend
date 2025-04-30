import Comment from "#models/comment";

export default class CommentQuery{
    public async CommentAPost(postId:number,userId:number,text:string){
        const comment=await Comment.create({postId,userId,text})
        return await Comment.query().where('id',comment.id).preload('user')
        
    }
    public async CommentOfAPostQuery(postId:number,page:number){

        const res= await Comment.query().where('postId',postId).orderBy('id','desc').preload('user').forPage(page,10);
        const res2=await this.NumberOfCommentOfAPost(postId);
        return {res,res2};
    }
    public async NumberOfCommentOfAPost(postId:number){
        const tabledata=await Comment.query().where('postId',postId).count('* as total')
        return tabledata[0].$extras.total
    }
}