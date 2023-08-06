import { Module } from '@nestjs/common';
import { TagModule } from './tag/tag.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from './ormconfig';
import { UserModule } from '@app/user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), UserModule, TagModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
