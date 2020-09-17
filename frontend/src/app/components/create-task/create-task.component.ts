import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  title: string;
  dueDate: string;
  description: string
  constructor(
    private dialogRef: MatDialogRef<CreateTaskComponent>
  ) { }

  ngOnInit() {
  }

  create() {
    if (!this.title || !this.dueDate || !this.description) {
      alert('all fields are manditory!')
      return
    }
    let request = {
      title: this.title,
      dueDate: new Date(this.dueDate).toISOString(),
      description: this.description
    }
    this.dialogRef.close(request)
  }

}
