import { ConfigService } from '@nestjs/config'
import { TypegooseModuleOptions } from 'nestjs-typegoose'

export const getMongoConfig = async (
	config: ConfigService
): Promise<TypegooseModuleOptions> => ({
	uri: config.get('MONGO_URI')
})
