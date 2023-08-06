import { Module } from '@nestjs/common';
import { TagController } from '@app/tag/tag.controller';
import { TagService } from '@app/tag/tag.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagEntity } from '@app/tag/tag.entity';

@Module({
  providers: [TagService],
  controllers: [TagController],
  imports: [TypeOrmModule.forFeature([TagEntity])],
})
export class TagModule {}
