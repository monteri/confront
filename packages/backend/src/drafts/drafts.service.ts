import { InjectModel } from '@nestjs/sequelize';
import { Draft } from './drafts.model';
import { Injectable } from '@nestjs/common';
import { CreateDraftDto } from './dto/create-draft.dto';

@Injectable()
export class DraftsService {
  constructor(@InjectModel(Draft) private userOrm: typeof Draft) {}

  async createDraft(dto: CreateDraftDto) {
    const draft = await this.userOrm.create(dto);
    return draft;
  }

  async getAllDrafts() {
    const drafts = await this.userOrm.findAll();
    return drafts;
  }
}
