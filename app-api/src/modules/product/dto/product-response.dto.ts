import { ApiProperty } from '@nestjs/swagger';

export class ProductResponseDto {
  @ApiProperty({
    description: 'Product ID',
    example: '21313131-3113131-131313sa',
  })
  id!: string;

  @ApiProperty({
    description: 'Product description',
    example: 'High quality wireless speaker',
    nullable: true,
  })
  description!: string | null;

  @ApiProperty({
    description: 'Product price in USD',
    example: 230.99,
  })
  price!: number;

  @ApiProperty({
    description: 'Product stock',
    example: 100,
  })
  stock!: number;

  @ApiProperty({
    description: 'Stock keeping unit',
    example: 'WH-001',
  })
  sku!: string;

  @ApiProperty({
    description: 'Product image URL',
    example: 'https://example.com/image2.jpg',
  })
  imageUrl!: string | null;

  @ApiProperty({
    description: 'Product category',
    example: 'Electronics',
  })
  category!: string;

  @ApiProperty({
    description: 'Whether product is active and available for purchase',
    example: true,
  })
  isActive!: boolean;

  @ApiProperty({
    example: '2025-01-02T12:00:00Z',
    description: 'The date and time when the product was created',
  })
  createdAt!: Date;

  @ApiProperty({
    example: '2025-01-02T12:00:00Z',
    description: 'The date and time when the product was last updated',
  })
  updatedAt!: Date;
}
