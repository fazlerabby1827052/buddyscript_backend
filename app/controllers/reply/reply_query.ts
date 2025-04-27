import Reply from "#models/reply";


export default class ReplyQuery{
    public async ReplyACommentQuery(commentId:number,userId:number,text:string){
        const reply=await Reply.create({commentId,userId,text})
        return await Reply.query().where('id',reply.id).preload('user').limit(10)
    }

    public async ReplyOfACommentQuery(commentId:number){
        return await Reply.query().where('commentId',commentId).preload('user').orderBy('id','desc').limit(10)
    }
}