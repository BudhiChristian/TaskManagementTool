import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() onRemove: EventEmitter<string> = new EventEmitter<string>();

  constructor(
  ) { }

  ngOnInit() {
  }

  remove() {
    this.onRemove.emit(this.task._id)
  }

  get isDueSoon() {
    let due = new Date(this.task.dueDate)
    let today = new Date()
    let twoDays = new Date(today)
    twoDays.setDate(twoDays.getDate() + 2)
    return !this.task.complete && due >= today && due <= twoDays
  }

  get isLate() {
    let due = new Date(this.task.dueDate)
    let today = new Date()
    return !this.task.complete && due < today
  }
}
