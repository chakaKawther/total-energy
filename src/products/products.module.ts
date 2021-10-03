import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './controller/product.controller';
import { Product, ProductSchema } from './schemas/product.schema';
import { ProductService } from './service/product.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
    ])
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
