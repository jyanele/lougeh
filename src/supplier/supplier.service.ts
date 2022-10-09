import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SupplierDto } from './dto';

@Injectable()
export class SupplierService {
   constructor(private prisma: PrismaService) { }

   async create(dto: SupplierDto) {
      const supplier = await this.prisma.supplier.create({
         data: {
            name: dto.name,
            contact: dto.contact,
            address: dto.address
         }
      }).catch(err => console.log(err))

      return supplier
   }

   async findOne(id) {
      const supplier = await this.prisma.supplier.findFirst({
         where: {
            id: id
         }
      })

      return supplier
   }

   async findAll() {
      const suppliers = await this.prisma.supplier.findMany()

      return suppliers
   }
}
