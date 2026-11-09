//DTO for category response

import { ApiProperty } from '@nestjs/swagger';

export class CategoryResponseDto {
  @ApiProperty({
    example: '5252525-31314114-1214344121a',
    description: 'The unique identifier of the category',
  })
  id!: string;

  @ApiProperty({
    example: 'Electronics',
    description: 'The name of the category',
  })
  name!: string;

  @ApiProperty({
    example: 'Devices and Gadgets including phones, laptops and accessories',
    description: 'The category description',
  })
  description!: string | null;

  @ApiProperty({
    example: 'electronics',
    description: 'A URL-friendly slug for the category',
  })
  slug!: string | null;

  @ApiProperty({
    example: 'https://example.com/images/electronics',
    description: 'URL of the category of the image',
  })
  imageUrl!: string | null;

  @ApiProperty({
    example: true,
    description: `Category's state indication`,
  })
  iSActive!: boolean | null;

  @ApiProperty({
    example: 100,
    description: 'Number of product in this category',
  })
  productCount!: number;

  @ApiProperty({
    example: '2025-01-02T12:00:00Z',
    description: 'The date and time when the category was created',
  })
  createdAt!: Date;

  @ApiProperty({
    example: '2025-01-02T12:00:00Z',
    description: 'The date and time when the category was last updated',
  })
  updatedAt!: Date;
}
