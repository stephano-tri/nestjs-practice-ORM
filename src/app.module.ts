import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Product} from 'src/models/product.entity';
import {ProductService} from "./models/product.service";
import {ProductController} from "./product.controller";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: `postgresql://root:${DB-PASSWORD}@localhost:5432/study?options=-c%20search_path=online_store`,
      database: 'study',
      synchronize: true,
      logging: true,
      entities: [Product],
  }),
    TypeOrmModule.forFeature([Product]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class AppModule {}
