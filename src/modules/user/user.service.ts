import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async store(data: UserDto) {
    const { name } = data
    const user = await this.userRepository.findOne({ name })

    if (user) {
      throw new BadRequestException('用户已存在！')
    }

    const entity =  await this.userRepository.create(data)
    await this.userRepository.save(entity)
    return entity
  }

  async show(id: string) {
    const entity = await this.userRepository.findOne(id)

    if (!entity) {
      throw new NotFoundException('该用户不存在！')
    }

    return entity
  }
}
