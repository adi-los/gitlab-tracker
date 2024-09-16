import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GitlabService {
  private readonly baseUrl: string = 'https://10.0.0.199/api/v4';
  private readonly token: string = 'glpat-uYcuDcCxgz14xZe87JEZ';

  constructor() {}

  // Function to bypass certificate checks
  private axiosInstance = axios.create({
    baseURL: this.baseUrl,
    headers: { 'Private-Token': this.token },
    httpsAgent: new (require('https').Agent)({
      rejectUnauthorized: false, // Bypass certificate check
    }),
  });

  // Get all projects
  async getAllProjects() {
    try {
      const response = await this.axiosInstance.get('/projects');
      return response.data;
    } catch (error) {
      console.error('Error fetching projects:', error.response?.data || error.message);
      throw new HttpException(
        `Failed to fetch projects: ${error.response?.data?.message || error.message}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  

  // Get all pipelines for a project
  async getProjectPipelines(projectId: number) {
    try {
      const response = await this.axiosInstance.get(`/projects/${projectId}/pipelines`);
      return response.data;
    } catch (error) {
      throw new HttpException(`Failed to fetch pipelines for project ${projectId}`, HttpStatus.BAD_REQUEST);
    }
  }

  // Get pipeline status for a project
  async getPipelineStatus(projectId: number, pipelineId: number) {
    try {
      const response = await this.axiosInstance.get(`/projects/${projectId}/pipelines/${pipelineId}`);
      return response.data.status;
    } catch (error) {
      throw new HttpException(
        `Failed to fetch pipeline status for pipeline ${pipelineId}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
