import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { PostService } from './post.service';
import { async } from 'rxjs/internal/scheduler/async';

@Controller('posts')
export class PostController {
  constructor(
    private readonly postService: PostService
  ) {}

  @Post()
  async store(@Body() data) {
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
  async update(@Param('id') id: string, @Body() data) {
    return await this.postService.update(id, data)
  }
}
