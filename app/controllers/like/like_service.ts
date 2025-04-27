import LikeQuery from "./like_query.js";

export default class LikeService{
    private likeQuery:LikeQuery
    constructor(){
        this.likeQuery = new LikeQuery()
    }
    public async LikeAPostService(data:{postId:number,userId:number}){
        return await this.likeQuery.LikeAPostQuery(data.postId,data.userId)
    }
    public async RemoveLikeService(data:{postId:number,userId:number}){
        return await this.likeQuery.RemoveLikeQuery(data.postId,data.userId)
    }

    public async LikeCountService(data:{postId:number}){
        return await this.likeQuery.CountPostLikeQuery(data.postId)
    }
    public async PostLikerNameService(data:{postId:number}){
        return await this.likeQuery.PostLikerNameQuery(data.postId)
    }
    public async likecheckService(data:{postId:number},userId:number){
        return await this.likeQuery.likecheck(data.postId,userId)
    }
}