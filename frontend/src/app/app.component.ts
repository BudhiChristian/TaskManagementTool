import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CreateTaskComponent } from './components/create-task/create-task.component';
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
    private taskManagmentService: TaskManagmentService,
    private dialog: MatDialog
  ) { }



  ngOnInit() {
    this.fetchData()
  }

  fetchData() {
    this.taskManagmentService.getTasks().subscribe((res: Task[]) => {
      this.tasks = res;
    })
  }

  createTask() {
    this.dialog.open(CreateTaskComponent, {
      width: '500px'
    })
      .afterClosed().subscribe(res => {
        if(res) {
          this.taskManagmentService.createTask(res).subscribe((res:Task) => {
            this.fetchData()
          })
        }
      })
  }

  deleteTask(id:string) {
    this.taskManagmentService.deleteTask(id).subscribe((res: Task) => {
      this.fetchData()
    })
  }

  get completedTasks() {
    if (!this.tasks) {
      return []
    }
    let completed = this.tasks.filter(task => task.complete)
    completed.sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
    return completed
  }

  get incompletedTasks() {
    if (!this.tasks) {
      return []
    }
    let incomplete = this.tasks.filter(task => !task.complete)
    incomplete.sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
    return incomplete
  }


}
