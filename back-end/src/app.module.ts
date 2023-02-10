import { Module } from '@nestjs/common'
import { VideoModule } from './video/video.module'
import { UserModule } from './user/user.module'
import { CommentModule } from './comment/comment.module'
import { AuthModule } from './auth/auth.module'
import { ConfigModule } from '@nestjs/config'
import { TypegooseModule } from 'nestjs-typegoose'
import { ConfigService } from '@nestjs/config/dist'
import { getMongoConfig } from './config/mongo.config'

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypegooseModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getMongoConfig
		}),
		VideoModule,
		UserModule,
		CommentModule,
		AuthModule
	]
})
export class AppModule {}
