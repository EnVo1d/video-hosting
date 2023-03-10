import { prop, Ref } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'
import { VideoModel } from 'src/video/video.model'

export interface UserModel extends Base {}

export class UserModel extends TimeStamps {
	@prop({ unique: true })
	email: string

	@prop()
	password: string

	@prop({ unique: true })
	name: string

	@prop()
	isVerified: string

	@prop()
	subscribersCount: number

	@prop()
	description: string

	@prop()
	location: string

	@prop()
	bannerPath: string

	@prop()
	avatarPath: string
}
