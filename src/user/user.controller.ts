import {
  Body,
  Controller, Get,
  Post, Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from '@app/user/user.service';
import { UserCreateDto } from '@app/user/dto/user.create.dto';
import { UserResponseInterface } from '@app/user/types/userResponse.interface';
import { UserLoginDto } from '@app/user/dto/user.login.dto';
import { Request } from "express";
import { ExpressRequestInterface } from '@app/types/expressRequest.interface';
import { User } from '@app/user/decorators/user.decorator';
import { UserEntity } from '@app/user/user.entity';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('users')
  @UsePipes(new ValidationPipe())
  async createUser(
    @Body('user') createUserDto: UserCreateDto,
  ): Promise<UserResponseInterface> {
    const user = await this.userService.createUser(createUserDto);
    return this.userService.buildUserResponse(user);
  }

  @Post('users/login')
  @UsePipes(new ValidationPipe())
  async login(
    @Body('user') userLoginDto: UserLoginDto,
  ): Promise<UserResponseInterface> {
    const user = await this.userService.login(userLoginDto);
    return this.userService.buildUserResponse(user);
  }

  @Get('user')
  async currentUser(@User() user: UserEntity, @User('id') currentUserId: number): Promise<UserResponseInterface> {
    console.log('userId', currentUserId)
    return this.userService.buildUserResponse(user)
  }
}
