
import { middleware } from "#start/kernel";
import router from "@adonisjs/core/services/router";
const UserController=()=> import('./user_controller.js')

router.post('/register',[UserController,'userCreate'])
router.post('/login',[UserController,'LoginUser'])
router.get('/logout',[UserController,'LogOut']).use(middleware.auth())
router.get('/islogin',[UserController,'islogin']).use(middleware.auth())