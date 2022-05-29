import { Module } from '@nestjs/common';
import { DraftsController } from './drafts.controller';
import { DraftsService } from './drafts.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Draft } from './drafts.model';

@Module({
  controllers: [DraftsController],
  providers: [DraftsService],
  imports: [SequelizeModule.forFeature([Draft])],
})
export class DraftsModule {}
