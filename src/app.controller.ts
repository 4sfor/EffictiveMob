import { Controller, Get, Patch } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('problem')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Patch()
  async updateProblemStatus():Promise<number> {
    return await this.appService.updateProblems();
  }
}
