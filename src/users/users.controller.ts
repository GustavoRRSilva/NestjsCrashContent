import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserEntity } from "./entities/UserEntity";
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiTags,
} from "@nestjs/swagger";

@ApiTags("users")
@Controller("users")
@ApiNotFoundResponse()
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  getAll(): UserEntity[] {
    return this.usersService.getAllUsers();
  }

  @Get(":id")
  getUserById(@Param("id", ParseIntPipe) id: number): UserEntity | undefined {
    return this.usersService.getUserById(id);
  }

  @ApiCreatedResponse({ type: UserEntity })
  @ApiBadRequestResponse()
  @Post()
  RegisterUser(@Body() body: CreateUserDto): UserEntity {
    return this.usersService.registerUser(body);
  }
}
