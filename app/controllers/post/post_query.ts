import Post from "#models/post";

export default class PostQuery{

    public async CreatePostQuery(content:string,userId:number){
        const post= await Post.create({content,userId,})
        return await Post.query().where('id',post.id).preload('user')
    }

    public async UpdatePostQuery(content:string,postId:number){
        await Post.query().where('id',postId).update({content})
        return await Post.query().where('id',postId)
    }

    public async DeletePostQuery(postId:number){
        await Post.query().where('id',postId).delete()
        return Post.query().where('id',postId)
    }

    public async SearchUserIdByPostId(postId:number){
        return Post.findBy('id',postId)
    }

    
    public async AllPostQQuery(){
        return await Post.query().preload('user').orderBy('createdAt',"desc").limit(10)
    }
    

    

}

