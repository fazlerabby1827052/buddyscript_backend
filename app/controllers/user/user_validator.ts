import vine from "@vinejs/vine";

export const UserRegisterValidator= vine.compile(
    vine.object({
        username:vine.string(),
        password:vine.string()
    })
)