import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductDto } from './dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
   constructor(private productService: ProductService) { }

   @Post()
   create(@Body() dto: ProductDto) {
      return this.productService.create(dto)
   }

   @Get()
   findAll() {
      return this.productService.findAll()
   }

   @Get(':id')
   @UsePipes(new ValidationPipe())
   findOne(@Param('id', ParseIntPipe) id: number) {
      return this.productService.findOne(id)
   }

}
