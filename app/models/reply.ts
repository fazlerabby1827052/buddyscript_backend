import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Comment from './comment.js'
import { DateTime } from 'luxon'

export default class Reply extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare commentId: number

  @column()
  declare userId: number

  @column()
  declare text: string

  @column.dateTime({autoCreate:true})
  declare createdAt: DateTime

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => Comment)
  declare comment: BelongsTo<typeof Comment>
}
