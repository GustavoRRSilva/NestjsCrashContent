import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserEntity } from "./entities/UserEntity";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("users")
@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  getAll(): UserEntity[] {
    return this.usersService.getAllUsers();
  }

  @Get(":id")
  getUserById(@Param("id") id: number): UserEntity | undefined {
    return this.usersService.getUserById(id);
  }

  @Post()
  RegisterUser(@Body() body: CreateUserDto): UserEntity {
    return this.usersService.registerUser(body);
  }
}
