
import { BaseModel, belongsTo, column, computed, hasMany } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Like from './like.js'
import Comment from './comment.js'
import { DateTime } from 'luxon'



export default class Post extends BaseModel{
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare content: string

  @column()
  declare userId: number

  @column.dateTime({autoCreate:true})
  declare createdAt: DateTime

  


  @belongsTo(()=>User)
  declare user: BelongsTo<typeof User>




  @hasMany(()=>Like)
    declare likes: HasMany<typeof Like>



  @hasMany(()=>Comment)
    declare comments: HasMany<typeof Comment>

  


  
}