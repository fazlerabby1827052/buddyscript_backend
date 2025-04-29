import CommentQuery from '#controllers/comment/comment_query'
import LikeQuery from '#controllers/like/like_query'
import Like from '#models/like'
import Post from '#models/post'
import db from '@adonisjs/lucid/services/db'

export default class PostQuery {
  private likeQuery:LikeQuery
  private commentQuery:CommentQuery
  constructor(){
    this.likeQuery=new LikeQuery()
    this.commentQuery=new CommentQuery()
  }
  public async CreatePostQuery(content: string, userId: number) {
    const post = await Post.create({ content, userId })
    // return await Post.query().where('id', post.id).preload('user')
    return await this.PostFetchQuery(post.id,userId)
    
  }
  public async PostFetchQuery(postId:number,userId:number){
    const postCopy= await Post.query().where('id',postId)
    .preload('user')
    
    const res=Promise.all(
      postCopy.map(async(currentpost)=>{
        const totallike=await this.likeQuery.CountPostLikeQuery(currentpost.id);
        const likecheck=await this.likeQuery.likecheck(currentpost.id,userId);
        const commentcount=await this.commentQuery.NumberOfCommentOfAPost(currentpost.id);
        const likers=await this.likeQuery.PostLikerNameQuery(currentpost.id);
        return {
          ...currentpost.serialize(),
          totallike:totallike,
          likecheck:likecheck,
          commentcount:commentcount,
          likers:likers
        }
      })
    )
    return res
  }

  public async UpdatePostQuery(content: string, postId: number,userId:number) {
    await Post.query().where('id', postId).update({ content })
    return await this.PostFetchQuery(postId,userId);
  }

  public async DeletePostQuery(postId: number,userId:number) {
    await Post.query().where('id', postId).delete()
    return await this.AllPostQQuery(userId,1);
  }

  public async SearchUserIdByPostId(postId: number) {
    return Post.findBy('id', postId)
  }

  public async NumberOfpost(){
    const res=await Post.query().count('* as total');
    return res[0].$extras.total;
  }

  public async AllPostQQuery(userId: number,page:number) {
    const posts = await Post.query()
      .preload('user')
      .orderBy('id', 'desc')
      .forPage(page,10)
    
    const numberofposts= await this.NumberOfpost();
    const res= await Promise.all(posts.map(async(post)=>{
      const totallike=await this.likeQuery.CountPostLikeQuery(post.id);
      const likecheck=await this.likeQuery.likecheck(post.id,userId);
      const commentcount= await this.commentQuery.NumberOfCommentOfAPost(post.id);
      const likers=await this.likeQuery.PostLikerNameQuery(post.id);
      
      return {
        ...post.serialize(),
        totallike:totallike,
        likecheck:likecheck,
        commentcount:commentcount,
        likers:likers,
        
      };
      
    }))

    return {res,numberofposts};
  }

  public async paginationPost(){
    return await db.from('posts').orderBy('id','desc').paginate(13,10);
  }
}
