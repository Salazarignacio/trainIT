import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(createUserDto); // Crea una instancia de User
    return await this.userRepository.save(newUser); // Guarda el nuevo usuario en la base de datos
  }
  async login(loginUserDto: LoginUserDto): Promise<User> {
    const findUser = await this.userRepository.findOne({
      where: { email: loginUserDto.email },
    });
    if (findUser) {
      if (findUser.password == loginUserDto.password) {
        return findUser;
      }
    }

  }

  async findOne(id: string): Promise<User> {
    return await this.userRepository.findOne({ where: { _id: id } });
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async updateOne(id: string, updateUserDTO: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.preload({
      _id: id,
      ...updateUserDTO,
    });
    if (!user) {
      throw new NotFoundException(`ID ${id} not found `);
    }
    return this.userRepository.save(user);
  }
  async removeOne(id: string): Promise<User[]> {
    const user = await this.userRepository.delete(id);
    if (!user) {
      throw new NotFoundException(`ID ${id} not found`);
    }
    return this.userRepository.find();
  }
}
