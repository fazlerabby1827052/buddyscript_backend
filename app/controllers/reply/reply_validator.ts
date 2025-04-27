import vine from "@vinejs/vine";

export const ReplyACommentValidator=vine.compile(
    vine.object({
        commentId:vine.number(),
        text:vine.string(),
    })
)

export const ReplyOfACommentValidator=vine.compile(
    vine.object({
        commentId:vine.number()
    })
)