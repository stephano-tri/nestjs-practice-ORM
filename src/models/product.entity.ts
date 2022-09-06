import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {ProductDTO} from "./product.dto";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({nullable : true})
  image: string;

  @Column()
  price: number;

  static from(name: string , description: string , image: string , price: number) {
    const product = new Product();
    product.name = name;
    product.description = description;
    product.image = image;
    product.price = price;

    return product;
  }

}
