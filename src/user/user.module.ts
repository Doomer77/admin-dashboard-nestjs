import { Module } from '@nestjs/common';
import { UserController } from '@app/user/user.controller';
import { UserService } from '@app/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '@app/user/user.entity';

@Module({
  providers: [UserService],
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule {}
