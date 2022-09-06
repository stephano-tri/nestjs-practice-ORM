import {IsNotEmpty, IsNumber, IsOptional} from "class-validator";

export class ProductDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsOptional()
  image: string;

  @IsNumber()
  price: number;
}
