import {Controller, Get, Param, Res} from "@nestjs/common";
import {ProductService} from "./models/product.service";


@Controller('/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/load/all')
  async loadAll() {
    return await this.productService.findAll();
  }

  @Get('/load/:id')
  async show(@Param() params) {
    const product = await this.productService.findOne(params.id);
    return {
      result: product,
    };
  }
}
