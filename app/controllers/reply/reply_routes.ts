import router from "@adonisjs/core/services/router";
import ReplyConstroller from "./reply_controller.js";

router.post('/reply',[ReplyConstroller,'ReplyACommentController'])
router.post('/reply/comment',[ReplyConstroller,'ReplyOfACommentController'])