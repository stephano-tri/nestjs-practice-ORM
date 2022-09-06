import {Body, Controller, Delete, Get, Param, Post, Res} from "@nestjs/common";
import {ProductService} from "./models/product.service";
import {Product} from "./models/product.entity";
import {ProductDTO} from "./models/product.dto";

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

  @Post('/save')
  async save(@Body() productDto: ProductDTO) {
    const inputProduct = Product.from(
      productDto.name,
      productDto.description,
      productDto.image,
      productDto.price,
    );

    const savedProduct = await this.productService.createOrUpdate(
        inputProduct
    );
    return {
      result: savedProduct,
    };
  }

  @Delete('/delete/:id')
  async delete(@Param() params) {
    const deletedProduct = await this.productService.delete(params.id);
    return {
      result: deletedProduct,
    };
  }
}
