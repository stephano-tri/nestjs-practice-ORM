import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Product} from './product.entity';
import {DeleteResult, Repository} from "typeorm";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  findOne(id: number): Promise<Product> {
    return this.productRepository.findOneBy({ id });
  }

  createOrUpdate(product: Product): Promise<Product> {
    return this.productRepository.save(product);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.productRepository.delete(id);
  }
}
