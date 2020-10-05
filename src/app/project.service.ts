import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  SERVER_URL: string = 'http://localhost:8080/api/';
  constructor(private httpClient: HttpClient) {}

  public getProjects() {
    return this.httpClient.get(this.SERVER_URL + 'projects');
  }

  public getProject(projectId) {
    return this.httpClient.get(`${this.SERVER_URL + 'projects'}/${projectId}`);
  }

  public addNote(project: any, notes: Array<any>) {
    return this.httpClient.post(`${this.SERVER_URL + 'projects'}`, project);
  }

  public deleteNote(project: any, noteId: number) {
    for (let i = 0; i < project.notes.length; i++) {
      if (project.notes[i].id == noteId) {
        project.notes.pop(i);
      }
    }
    return this.httpClient.put(
      `${this.SERVER_URL + 'projects'}/${project.id}`,
      project
    );
  }
}
