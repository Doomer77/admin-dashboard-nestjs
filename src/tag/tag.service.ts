import { Body, Injectable } from '@nestjs/common';
import { CreateTagDto } from '@app/tag/dto/createRoleDto';
import { TagEntity } from '@app/tag/tag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(TagEntity)
    private readonly tagRepository: Repository<TagEntity>,
  ) {}
  async createTag(
    @Body('tags') createTagDto: CreateTagDto,
  ): Promise<TagEntity> {
    const tag = new TagEntity();
    Object.assign(tag, createTagDto);
    return await this.tagRepository.save(tag);
  }
}
