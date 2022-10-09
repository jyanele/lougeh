import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CustomerDto } from './dto';
import * as argon from 'argon2'

@Injectable()
export class CustomerService {
   constructor(private prisma: PrismaService) { }

   async create(dto: CustomerDto) {
      const hash = await argon.hash(dto.password)
      const user = await this.prisma.customer.create({
         data: {
            fullname: dto.fullname,
            contact: dto.contact,
            address: dto.address,
            username: dto.username,
            password: hash
         }
      })
      delete user.password
      return user
   }

   async findOne(id: number) {
      const user = await this.prisma.customer.findUnique({
         where: {
            id: id
         }
      })
      delete user.password
      return user
   }

   async findAll() {
      const users = await this.prisma.customer.findMany()
      users.forEach(user => delete user.password)
      return users
   }

   async updateOne(id: number, dto: CustomerDto) {
      const hash = await argon.hash(dto.password)
      const user = await this.prisma.customer.update({
         where: {
            id: id
         },
         data: {
            fullname: dto.fullname,
            contact: dto.contact,
            address: dto.address,
            username: dto.username,
            password: hash
         }
      })

      delete user.password
      return user
   }
}
