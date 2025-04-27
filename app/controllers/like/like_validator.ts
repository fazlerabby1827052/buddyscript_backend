import vine from "@vinejs/vine";

export const LikeAPostValidator=vine.compile(
    vine.object({
        postId:vine.number(),
        userId:vine.number()
    })
)

export const LikeCountValidator=vine.compile(
    vine.object({
        postId:vine.number(),
    })
)


export const LikeCheckValidator=vine.compile(
    vine.object({
        postId:vine.number()
    })
)