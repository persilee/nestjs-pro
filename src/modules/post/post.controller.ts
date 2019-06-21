import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { PostService } from './post.service';
import { async } from 'rxjs/internal/scheduler/async';
import { PostDto } from './post.dto';

@Controller('posts')
export class PostController {
  constructor(
    private readonly postService: PostService
  ) {}

  @Post()
  async store(@Body() data: PostDto) {
    return await this.postService.store(data)
  }

  @Get()
  async index() {
    return await this.postService.index()
  }

  @Get(':id')
  async show(@Param('id') id: string) {
    return await this.postService.show(id)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Partial<PostDto>) {
    return await this.postService.update(id, data)
  }

  @Delete(':id')
  async destory(@Param('id') id: string) {
    return await this.postService.destroy(id)
  }
}
