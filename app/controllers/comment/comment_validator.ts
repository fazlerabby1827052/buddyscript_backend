import vine from "@vinejs/vine";

export const CommentAPostValidator=vine.compile(
    vine.object({
        postId:vine.number(),
        text:vine.string()
    })
)


export const CommentOfAPostValidator=vine.compile(
    vine.object({
        postId:vine.number(),
    })
)