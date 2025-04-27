

import PostQuery from "./post_query.js";
import { Exception } from "@adonisjs/core/exceptions";

export default class PostService{
    private postQuery:PostQuery
    constructor(){
        this.postQuery=new PostQuery()
    }
    public async CreatePostService(data:{content:string},userId:number){
        return await this.postQuery.CreatePostQuery(data.content,userId)
    }

    public async UpdatePostService(data:{content:string,postId:number},userId:number){
        const post = await this.postQuery.SearchUserIdByPostId(data.postId)
        if(post?.userId!==userId){
            throw new Exception("Unauthorized")
        }
        return await this.postQuery.UpdatePostQuery(data.content,data.postId)
    }

    public async DeletePostService(data:{postId:number},userId:number){
        const post = await this.postQuery.SearchUserIdByPostId(data.postId)
        if(post?.userId!==userId){
            throw new Exception("Unauthorized")
        }
        return await this.postQuery.DeletePostQuery(data.postId)
    }
    public async AllPostService(){
        return await this.postQuery.AllPostQQuery()
    }
}