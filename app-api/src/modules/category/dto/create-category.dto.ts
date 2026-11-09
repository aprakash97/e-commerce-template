import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({
    example: 'Electronics',
    description: 'The name of the category',
    maxLength: 100,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name!: string;

  @ApiProperty({
    example: 'Devices and Gadgets including phones, laptops and accessories',
    description: 'A brief description about the category',
    required: false,
    maxLength: 255,
  })
  @MaxLength(255)
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    example: 'electronics',
    description: 'A URL-friendly slug for the category',
    required: false,
    maxLength: 100,
  })
  @MaxLength(100)
  @IsOptional()
  @IsString()
  slug?: string;

  @ApiProperty({
    example: 'https://example.com/images/electronics',
    description: 'URL of the category of the image',
    required: false,
    maxLength: 255,
  })
  @MaxLength(255)
  @IsOptional()
  @IsString()
  imageUrl?: string;

  @ApiProperty({
    example: true,
    description: 'Indicates if the category is active or not',
    required: false,
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
