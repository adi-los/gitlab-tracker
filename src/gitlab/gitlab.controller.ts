import { Controller, Get, Param } from '@nestjs/common';
import { GitlabService } from './gitlab.service';

@Controller('gitlab')
export class GitlabController {
  constructor(private readonly gitlabService: GitlabService) {}

  // Endpoint to get all projects
  @Get('projects')
  async getAllProjects() {
    return this.gitlabService.getAllProjects();
  }

  // Endpoint to get all pipelines for a project
  @Get('projects/:id/pipelines')
  async getProjectPipelines(@Param('id') projectId: number) {
    return this.gitlabService.getProjectPipelines(projectId);
  }

  // Endpoint to get pipeline status
  @Get('projects/:id/pipelines/:pipelineId')
  async getPipelineStatus(@Param('id') projectId: number, @Param('pipelineId') pipelineId: number) {
    return this.gitlabService.getPipelineStatus(projectId, pipelineId);
  }
}
