import { Component } from '@angular/core';
import { Task } from './models/task.model';
import { TaskManagmentService } from './services/task-managment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public tasks: Task[];
  public showLoader: boolean = false;

  constructor(
    private taskManagmentService: TaskManagmentService
  ) { }



  ngOnInit() {
    this.fetchData()
  }

  fetchData() {
    this.taskManagmentService.getTasks().subscribe((res: Task[]) => {
      this.tasks = res;
    })
  }


}
