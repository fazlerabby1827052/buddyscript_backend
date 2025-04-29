import { middleware } from "#start/kernel";
import router from "@adonisjs/core/services/router";
const PostController=()=> import('./post_controller.js')

router.post('/post/create',[PostController,'CreatePostController'])
router.post('/post/update',[PostController,'UpdatePostController'])
router.post('/post/delete',[PostController,'DeletePostController'])
router.get('/post/:page',[PostController,'AllPostController']).use(middleware.auth())
router.get('/paginate',[PostController,'paginateController'])
