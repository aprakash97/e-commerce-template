import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'generated/prisma/enums';

export class UserResponseDto {
  @ApiProperty({ description: 'User ID', example: 'adadsaasadadadadda' })
  id!: string;

  @ApiProperty({
    description: 'User email address',
    example: 'user@example.com',
  })
  email!: string;

  @ApiProperty({
    description: 'User firstName',
    example: 'Tom | null',
  })
  firstName!: string | null;

  @ApiProperty({
    description: 'User last name',
    example: 'Mack | null',
  })
  lastName!: string | null;

  @ApiProperty({
    description: 'User Role',
    enum: Role,
  })
  role!: Role;

  @ApiProperty({
    description: 'Account creation time',
    example: '2023-12:01T13',
  })
  createdAt!: Date;

  @ApiProperty({
    description: 'Account last updated time',
    example: '2023-12:01T13',
  })
  updatedAt!: Date;
}
