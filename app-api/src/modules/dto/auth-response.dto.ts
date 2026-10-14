import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'generated/prisma/enums';

export class AuthResponseDto {
  @ApiProperty({
    description: 'Access Token for Authentication',
    example:
      '4b2c2ec50ecbf8aa3e481e7e26b0adce392a2f70fd6e7e178c552bcec42f6f19cc31a5185ec6fd341f466864ff9b41f4ab5f130bbe516d1125118f23f79b4873aec3b3ea49b83b9fd19cca0d37852b1bbaf99c34b1768c0800c9ffc54caf6d6996cfb36c21174aa6cac0c20a00bdf897f0af481303eb883445aadc95',
  })
  accessToken!: string;

  @ApiProperty({
    description: 'Refresh Token for obtaining new access token',
    example:
      '4b2c2ec50ecbf8aa3e481e7e26b0adce392a2f70fd6e7e178c552bcec42f6f19cc31a5185ec6fd341f466864ff9b41f4ab5f130bbe516d1125118f23f79b4873aec3b3ea49b83b9fd19cca0d37852b1bbaf99c34b1768c0800c9ffc54caf6d6996cfb36c21174aa6cac0c20a00bdf897f0af481303eb883445aadc95',
  })
  refreshToken!: string;

  @ApiProperty({
    description: 'Access Token',
    example: {
      id: 'user-124',
      email: 'user@example.com',
      firstName: 'user',
      lastName: 'ex',
      role: 'USER',
    },
  })
  user!: {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    role: Role;
  };
}
