"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitlabService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let GitlabService = class GitlabService {
    constructor() {
        this.baseUrl = 'https://10.0.0.199/api/v4';
        this.token = 'glpat-uYcuDcCxgz14xZe87JEZ';
        this.axiosInstance = axios_1.default.create({
            baseURL: this.baseUrl,
            headers: { 'Private-Token': this.token },
            httpsAgent: new (require('https').Agent)({
                rejectUnauthorized: false,
            }),
        });
    }
    async getAllProjects() {
        try {
            const response = await this.axiosInstance.get('/projects');
            return response.data;
        }
        catch (error) {
            console.error('Error fetching projects:', error.response?.data || error.message);
            throw new common_1.HttpException(`Failed to fetch projects: ${error.response?.data?.message || error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getProjectPipelines(projectId) {
        try {
            const response = await this.axiosInstance.get(`/projects/${projectId}/pipelines`);
            return response.data;
        }
        catch (error) {
            throw new common_1.HttpException(`Failed to fetch pipelines for project ${projectId}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getPipelineStatus(projectId, pipelineId) {
        try {
            const response = await this.axiosInstance.get(`/projects/${projectId}/pipelines/${pipelineId}`);
            return response.data.status;
        }
        catch (error) {
            throw new common_1.HttpException(`Failed to fetch pipeline status for pipeline ${pipelineId}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.GitlabService = GitlabService;
exports.GitlabService = GitlabService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], GitlabService);
//# sourceMappingURL=gitlab.service.js.map