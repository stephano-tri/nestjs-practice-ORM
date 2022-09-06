import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Product} from 'src/models/product.entity';
import {ProductService} from "./models/product.service";
import {ProductController} from "./product.controller";
import {ConfigModule, ConfigService} from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.database.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: configService.get('DATABASE_ID'),
        password: configService.get('DATABASE_PASSWORD'),
        database: 'study',
        synchronize: true,
        logging: true,
        schema: 'online_store',
        entities: [Product],
      }),
    }),
    TypeOrmModule.forFeature([Product]),
  ],
  controllers: [ProductController, AppController],
  providers: [ProductService, AppService],
})
export class AppModule {}
