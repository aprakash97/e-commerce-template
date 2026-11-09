import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';

//dto for updating an existing product
export class UpdateProductDto extends PartialType(CreateProductDto) {}
