import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  SERVER_URL: string = 'http://localhost:8080/api/';
  constructor(private httpClient: HttpClient) {}

  public getPolicies() {
    return this.httpClient.get(this.SERVER_URL + 'projects');
  }

  public getProject(projectId) {
    return this.httpClient.get(`${this.SERVER_URL + 'projects'}/${projectId}`);
  }
  public createProject(project: {
    id: number;
    title: string;
    start_date: string;
    status: string;
    active: string;
    assignee: string;
    percent_complete: string;
    details: {
      requestor: {
        id: number;
        name: string;
        department: string;
      };
      summary: string;
      justification: string;
    };
    notes: Array<any>;
  }) {
    return this.httpClient.post(`${this.SERVER_URL + 'projects'}`, project);
  }

  public deleteProject(projectId) {
    return this.httpClient.delete(
      `${this.SERVER_URL + 'projects'}/${projectId}`
    );
  }
  public updateProject(project: {
    id: number;
    title: string;
    start_date: string;
    status: string;
    active: string;
    assignee: string;
    percent_complete: string;
    details: {
      requestor: {
        id: number;
        name: string;
        department: string;
      };
      summary: string;
      justification: string;
    };
    notes: Array<any>;
  }) {
    return this.httpClient.put(
      `${this.SERVER_URL + 'projects'}/${project.id}`,
      project
    );
  }
}
