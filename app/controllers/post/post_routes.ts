import { middleware } from "#start/kernel";
import router from "@adonisjs/core/services/router";
const PostController=()=> import('./post_controller.js')

router.post('/post/create',[PostController,'CreatePostController']).use(middleware.auth())
router.post('/post/update',[PostController,'UpdatePostController']).use(middleware.auth())
router.post('/post/delete',[PostController,'DeletePostController']).use(middleware.auth())
router.get('/post/:page',[PostController,'AllPostController']).use(middleware.auth())
router.get('/paginate',[PostController,'paginateController']).use(middleware.auth())
