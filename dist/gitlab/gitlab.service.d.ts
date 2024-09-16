export declare class GitlabService {
    private readonly baseUrl;
    private readonly token;
    constructor();
    private axiosInstance;
    getAllProjects(): Promise<any>;
    getProjectPipelines(projectId: number): Promise<any>;
    getPipelineStatus(projectId: number, pipelineId: number): Promise<any>;
}
