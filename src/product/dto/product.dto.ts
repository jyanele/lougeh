import { IsString, IsNotEmpty, IsInt } from 'class-validator'

export class ProductDto {
   @IsNotEmpty()
   @IsString()
   name: string

   @IsString()
   description: string

   quantity: number

   price: number

   barcode: string
}