import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class QueryCategoryDto {
  @ApiProperty({
    description: `Category's state indication`,
    example: true,
  })
  @Transform(({ value }) => {
    if (value === 'true' || value === true) return true;
    if (value === 'false' || value === false) return false;

    return undefined;
  })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @ApiProperty({
    description: 'Search term to filter categories by name or description',
    example: 'Electronics',
  })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiProperty({
    description: 'Page number for pagination',
    example: 1,
    default: 1,
    minimum: 1,
  })
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @IsOptional()
  page = 1;

  @ApiProperty({
    description: 'Number of items for pagination',
    example: 10,
    default: 10,
    minimum: 1,
  })
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @IsOptional()
  limit = 10;
}
