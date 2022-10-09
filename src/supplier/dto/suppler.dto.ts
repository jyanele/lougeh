import { IsString, IsNotEmpty } from "class-validator";

export class SupplierDto {
   @IsString()
   @IsNotEmpty()
   name: string

   @IsString()
   contact: string

   @IsString()
   address: string
}