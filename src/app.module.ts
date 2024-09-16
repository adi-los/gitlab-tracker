import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GitlabService } from './gitlab/gitlab.service';
import { GitlabController } from './gitlab/gitlab.controller';

@Module({
  imports: [],
  controllers: [AppController, GitlabController],
  providers: [AppService, GitlabService],
})
export class AppModule {}
