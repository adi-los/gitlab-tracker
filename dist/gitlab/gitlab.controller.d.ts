import { GitlabService } from './gitlab.service';
export declare class GitlabController {
    private readonly gitlabService;
    constructor(gitlabService: GitlabService);
    getAllProjects(): Promise<any>;
    getProjectPipelines(projectId: number): Promise<any>;
    getPipelineStatus(projectId: number, pipelineId: number): Promise<any>;
}
