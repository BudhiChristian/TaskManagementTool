import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskManagmentService {
  private readonly api: string = environment.taskManagmentApi + "/tasks";

  constructor(
    private http: HttpClient
  ) { }

  getTasks() {
    return this.http.get<Task[]>(this.api)
  }

  createTask(request) {
    return this.http.post<Task>(this.api, request)
  }

  deleteTask(id) {
    return this.http.delete<Task>(`${this.api}/${id}`)
  }

}
