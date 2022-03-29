import { IsDecimal, IsDefined, IsEmail, IsNumber } from "class-validator"



export class CreateUserDto {
    @IsEmail()
    @IsDefined()
    email: string
    @IsDefined()
    @IsNumber()
    password: string
    @IsDefined()
    fistName: string
    @IsDefined()
    lastName: string
}