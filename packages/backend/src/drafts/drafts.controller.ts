import { Body, Controller, Get, Post } from '@nestjs/common';
import { DraftsService } from './drafts.service';
import { CreateDraftDto } from './dto/create-draft.dto';

@Controller('drafts')
export class DraftsController {
  constructor(private draftsService: DraftsService) {}

  @Post()
  create(@Body() draftDto: CreateDraftDto) {
    return this.draftsService.createDraft(draftDto);
  }

  @Get()
  getAll() {
    return this.draftsService.getAllDrafts();
  }
}
