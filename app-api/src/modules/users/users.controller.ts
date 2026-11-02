import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/common/guards/jwt-auth-guard';
import { RoleGuard } from '../auth/guards/roles.guards';
import { UsersService } from './users.service';
import { UserResponseDto } from '../dto/user-response.dto';
import type { RequestWithUser } from '../auth/common/interfaces/request-with-user-interface';
import { Roles } from '../auth/common/decorators/roles.decorator';
import { Role } from 'generated/prisma/enums';
import { UpdateUserDto } from '../dto/update-user.dto';
import { GetUser } from '../auth/common/decorators/get-user-decorator';
import { ChangePasswordDto } from '../dto/change-password.dto';

@ApiTags('users')
@Controller('users')
@ApiBearerAuth('JWT-auth')
@UseGuards(JwtAuthGuard, RoleGuard)
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('me')
  @ApiOperation({ summary: 'Get current user profile' })
  @ApiResponse({
    status: 200,
    description: 'The current user profile',
    type: UserResponseDto,
  })
  async getProfile(@Req() req: RequestWithUser): Promise<UserResponseDto> {
    return await this.userService.findOne(req.user.id);
  }

  // Get all users - admin API
  @Get()
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({
    status: 200,
    description: 'List of all users',
    type: [UserResponseDto],
  })
  async findAll(): Promise<UserResponseDto[]> {
    return await this.userService.findAll();
  }

  // Get User by Admin - admin API
  @Get(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Get User by ID' })
  @ApiResponse({
    status: 200,
    description: 'Get user with the specified ID',
    type: UserResponseDto,
  })
  @ApiResponse({
    status: 401,
    summary: 'Unauthorized',
  })
  @ApiResponse({
    status: 404,
    summary: 'User not found',
  })
  async findOne(@Param('id') id: string): Promise<UserResponseDto> {
    return await this.findOne(id);
  }

  // Update Profile API
  @Patch(':me')
  @ApiOperation({ summary: 'Updating user detail' })
  @ApiBody({
    type: UpdateUserDto,
  })
  @ApiResponse({
    status: 401,
    summary: 'Unauthorized',
  })
  @ApiResponse({
    status: 409,
    summary: 'Email already in use',
  })
  async updateProfile(
    userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserResponseDto> {
    return await this.userService.update(userId, updateUserDto);
  }

  //Change current user password
  @Patch('me/password')
  @ApiOperation({
    summary: 'Change current user password',
  })
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: 200, description: 'Password changed successfully' })
  @ApiResponse({
    status: 401,
    summary: 'Unauthorized',
  })
  async changePassword(
    @GetUser('id') userId: string,
    @Body() changePasswordDto: ChangePasswordDto,
  ): Promise<{ message: string }> {
    return await this.userService.changePassword(userId, changePasswordDto);
  }

  //Delete current user account
  @Delete('me')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete current user' })
  @ApiResponse({ status: 200, description: 'Account deleted successfully' })
  @ApiResponse({ status: 401, summary: 'Unauthorized' })
  async deleteAccount(
    @GetUser('id') userId: string,
  ): Promise<{ message: string }> {
    return await this.userService.deleteAccount(userId);
  }

  //Delete by admin
  @Delete(':id')
  @Roles(Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete user by Id' })
  @ApiResponse({
    status: 200,
    description: 'User with specified Id is deleted successfully',
  })
  @ApiResponse({ status: 401, summary: 'Unauthorized' })
  async deleteUser(@Param('id') userId: string): Promise<{ message: string }> {
    return await this.userService.deleteAccount(userId);
  }
}
