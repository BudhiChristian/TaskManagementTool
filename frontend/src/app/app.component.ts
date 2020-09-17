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
  public filters: string[] = [
    "None",
    "Due Soon",
    "Over Due",
    "Complete"
  ]
  public filter: string = this.filters[0];

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

  updateTask(newTask: Task) {
    this.taskManagmentService.updateTask(newTask._id, newTask).subscribe((res: Task) => {
      this.fetchData()
    })
  }

  get completedTasks() {
    if (!this.tasks || !["None","Complete"].some(f => f === this.filter)) {
      return []
    }
    let completed = this.tasks.filter(task => task.complete)
    completed.sort((a, b) => new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime())
    return completed
  }

  get incompletedTasks() {
    if (!this.tasks || this.filter === "Complete") {
      return []
    }
    let incomplete = this.tasks.filter(task => {
      let due = new Date(task.dueDate)
      let today = new Date()
      let twoDays = new Date(today)
      twoDays.setDate(twoDays.getDate() + 2)
      switch(this.filter) {
        case 'Over Due':
          return !task.complete && due < today
        case 'Due Soon':
          return !task.complete && due >= today && due <= twoDays
        default:
          return !task.complete
      }
      })
    incomplete.sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
    return incomplete
  }


}
