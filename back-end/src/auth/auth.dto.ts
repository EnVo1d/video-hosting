import { IsEmail } from 'class-validator'
import { IsString, MinLength } from 'class-validator/types/decorator/decorators'

export class AuthDto {
	@IsEmail()
	email: string

	@MinLength(6, {
		message: "Password can't be less than 6 characters!"
	})
	@IsString()
	password: string
}
