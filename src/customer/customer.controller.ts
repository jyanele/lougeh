import { Body, Get, Post, Controller, Param, ParseIntPipe, UsePipes, ValidationPipe, Patch } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerDto } from './dto';

@Controller('customers')
export class CustomerController {
   constructor(private customerService: CustomerService) { }

   @Post()
   create(@Body() dto: CustomerDto) {
      return this.customerService.create(dto)
   }

   @Get()
   findAll() {
      return this.customerService.findAll()
   }

   @Get(':id')
   @UsePipes(new ValidationPipe())
   findOne(@Param('id', ParseIntPipe) id: number) {
      return this.customerService.findOne(id)
   }

   @Patch(':id')
   @UsePipes(new ValidationPipe())
   updateOne(@Param('id', ParseIntPipe) id: number, @Body() dto: CustomerDto) {
      return this.customerService.updateOne(id, dto)
   }

}
