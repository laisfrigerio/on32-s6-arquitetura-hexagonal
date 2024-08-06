import { Inject, Controller, Get, Param, Post, Body } from '@nestjs/common';
import { IUserService } from 'src/ports/input/user-service.interface';
import { User } from 'src/domain/entities/user.entity';
import { CreateUserDto } from 'src/adapters/input/dtos/user.dto';

@Controller('users')
export class UserController {
  constructor(
    @Inject('IUserService')
    private readonly userService: IUserService,
  ) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): User {
    const user = { ...createUserDto };
    return this.userService.createUser(user);
  }

  @Get()
  getAllUsers(): User[] {
    return this.userService.getAllUsers();
  }

  @Get(':userId')
  getUserById(@Param('id') userId: string): User {
    return this.userService.getUserById(userId);
  }

  @Get(':email/email')
  getUserByEmail(@Param('email') email: string): User {
    return this.userService.getUserByEmail(email);
  }
}
