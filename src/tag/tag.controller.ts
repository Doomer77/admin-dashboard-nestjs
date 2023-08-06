import { Body, Controller, Post } from '@nestjs/common';
import { TagService } from '@app/tag/tag.service';
import { CreateTagDto } from '@app/tag/dto/createRoleDto';
import { TagEntity } from '@app/tag/tag.entity';

@Controller()
export class TagController {
  constructor(private readonly tagService: TagService) {}
  @Post('tags')
  async createTag(@Body('tag') createTagDto: CreateTagDto): Promise<TagEntity> {
    return await this.tagService.createTag(createTagDto);
  }
}
