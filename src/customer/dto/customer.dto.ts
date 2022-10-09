import { IsString, IsNotEmpty, IsInt } from "class-validator";
export class CustomerDto {
   @IsNotEmpty()
   @IsString()
   fullname: string;

   @IsString()
   contact: string;

   @IsString()
   address: string;

   @IsNotEmpty()
   username: string;

   @IsNotEmpty()
   password: string;
}