import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import User from './user.js'
import Post from './post.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Reply from './reply.js'
import { DateTime } from 'luxon'

export default class Comment extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare postId: number

  @column()
  declare userId: number

  @column()
  declare text: string

  @column.dateTime({autoCreate:true})
  declare createdAt: DateTime

  @hasMany(()=>Reply)
  declare replies: HasMany<typeof Reply>

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => Post)
  declare post: BelongsTo<typeof Post>
}
