import { Component } from '@angular/core';
import { TaskManagmentService } from './services/task-managment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public tasks: any;

  constructor(
    private taskManagmentService: TaskManagmentService
  ) { }



  ngOnInit() {
    this.fetchData()
  }

  fetchData() {
    this.taskManagmentService.getTasks().subscribe((res: any) => {
      this.tasks = res;
    })
  }


}
