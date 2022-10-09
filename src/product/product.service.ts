import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductDto } from './dto';

@Injectable()
export class ProductService {
   constructor(private prisma: PrismaService) { }

   async create(dto: ProductDto) {
      const product = await this.prisma.product.create({
         data: {
            name: dto.name,
            description: dto.description,
            quantity: dto.quantity,
            price: dto.price,
            barcode: dto.barcode
         }
      }).catch(err => console.log(err))

      return product
   }

   async findAll() {
      const products = await this.prisma.product.findMany()

      return products
   }

   async findOne(id) {
      const product = await this.prisma.product.findUnique({
         where: {
            id: id
         }
      })

      return product
   }
}
