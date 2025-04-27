import Like from "#models/like";

export default class LikeQuery{
    public async LikeAPostQuery(postId:number,userId:number){
        return await Like.create({postId,userId})
    }
    public async RemoveLikeQuery(postId:number,userId:number){
        await Like.query().where('userId',userId).andWhere('postId',postId).delete()
        return await Like.findBy({postId,userId})
    }
    public async CountPostLikeQuery(postId:number){
        const likes= await Like.query().where('postId',postId).count('*','total')
        return likes[0].$extras.total
    }
    public async PostLikerNameQuery(postId:number){
        const likers= await Like.query().where('postId',postId).preload('user').orderBy('id','desc').limit(10)
        return likers.map(liker=>liker.user.username)
    }
    public async likecheck(postId:number,userId:number){
        const a=await Like.findBy({postId,userId})
        // console.log(a)
        if(a===null){
            return 0
        }
        return 1
    }
    
}