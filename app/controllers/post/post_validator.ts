import vine from "@vinejs/vine";

export const CreatePostValidator=vine.compile(
    vine.object({
        content:vine.string()
        
    })

)


export const DeletePostValidator=vine.compile(
    vine.object({
        
        postId:vine.number()
        
        
    })
    
)


export const UpdatePostValidator=vine.compile(
    vine.object({
        content:vine.string(),
        postId:vine.number()
        
        
    })
    
)