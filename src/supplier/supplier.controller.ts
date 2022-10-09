import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { SupplierDto } from './dto';
import { SupplierService } from './supplier.service';

@Controller('suppliers')
export class SupplierController {
   constructor(private supplierService: SupplierService) { }

   @Post()
   create(@Body() dto: SupplierDto) {
      return this.supplierService.create(dto)
   }

   @Get(':id')
   @UsePipes(new ValidationPipe())
   findOne(@Param('id', ParseIntPipe) id: number) {
      return this.supplierService.findOne(id)
   }

   @Get()
   findAll() {
      return this.supplierService.findAll()
   }
}
