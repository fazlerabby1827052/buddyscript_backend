import { middleware } from "#start/kernel";
import router from "@adonisjs/core/services/router";
const LikeController=()=> import('./like_controller.js')

router.post('/like',[LikeController,'LikeAPostController'])
router.post('/dislike',[LikeController,'LikeRemoveController'])
router.post('/like/count',[LikeController,'LikeCountController'])
router.post('/like/user',[LikeController,'PostLikerNameController']).use(middleware.auth())
router.post('/checklike',[LikeController,'LikeCheckController'])