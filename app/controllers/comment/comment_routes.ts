import { middleware } from "#start/kernel";
import router from "@adonisjs/core/services/router";
const CommentController=()=>import('./comment_controller.js')

router.post('/comment',[CommentController,'CommentAPostController']).use(middleware.auth())
router.get('/comment/:post/:page',[CommentController,'CommentOfAPostController']).use(middleware.auth())
router.post('/numberofcomment',[CommentController,'NumberofCommentOfAPostController']).use(middleware.auth())