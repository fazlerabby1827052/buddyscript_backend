import { middleware } from "#start/kernel";
import router from "@adonisjs/core/services/router";
const LikeController=()=> import('./like_controller.js')

router.post('/like',[LikeController,'LikeAPostController']).use(middleware.auth())
router.post('/dislike',[LikeController,'LikeRemoveController']).use(middleware.auth())
router.post('/like/count',[LikeController,'LikeCountController']).use(middleware.auth())
router.post('/like/user',[LikeController,'PostLikerNameController']).use(middleware.auth())
router.post('/checklike',[LikeController,'LikeCheckController']).use(middleware.auth())