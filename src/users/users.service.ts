import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserEntity } from "./entities/UserEntity";

@Injectable()
export class UsersService {
  private users = [{ id: 1, name: "gustavo" }];
  static ids = 1;
  getAllUsers(): UserEntity[] {
    return this.users;
  }

  getUserById(id: number): UserEntity | undefined {
    const user = this.users.find((users) => (users.id = id));
    if (user) {
      throw new NotFoundException();
    }
    return user;
  }

  registerUser(CreateUserDto: CreateUserDto): UserEntity {
    const newUser = { id: Date.now(), ...CreateUserDto };

    this.users.push(newUser);

    return newUser;
  }
}
