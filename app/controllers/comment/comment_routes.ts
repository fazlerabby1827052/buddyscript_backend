import router from "@adonisjs/core/services/router";
const CommentController=()=>import('./comment_controller.js')
router.post('/comment',[CommentController,'CommentAPostController'])
router.post('/comment/post',[CommentController,'CommentOfAPostController'])
router.post('/numberofcomment',[CommentController,'NumberofCommentOfAPostController'])