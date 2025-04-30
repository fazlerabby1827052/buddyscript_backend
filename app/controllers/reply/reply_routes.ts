import router from "@adonisjs/core/services/router";
import ReplyConstroller from "./reply_controller.js";
import { middleware } from "#start/kernel";

router.post('/reply',[ReplyConstroller,'ReplyACommentController']).use(middleware.auth())
router.post('/reply/comment',[ReplyConstroller,'ReplyOfACommentController']).use(middleware.auth())