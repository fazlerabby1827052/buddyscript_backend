/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/


// import Post from '#models/post'
// import router from '@adonisjs/core/services/router'
import '../app/controllers/user/user_routes.js'
import '../app/controllers/post/post_routes.js'
import '../app/controllers/like/like_routes.js'
import '../app/controllers/comment/comment_routes.js'
import '../app/controllers/reply/reply_routes.js'

// router.post('/test', async ({request}) => {

//   await Post.query().where('id',1).update({content:"it work"})

//   return await Post.query().where('id',1)
// })

