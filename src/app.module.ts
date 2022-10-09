import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { CustomerModule } from './customer/customer.module';
import { SupplierModule } from './supplier/supplier.module';
import { DeliveryModule } from './delivery/delivery.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ProductModule,
    CustomerModule,
    SupplierModule,
    DeliveryModule,
    AuthModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    })],
})
export class AppModule { }
