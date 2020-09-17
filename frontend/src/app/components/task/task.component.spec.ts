import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatChipsModule, MatIconModule } from '@angular/material';
import { Task } from 'src/app/models/task.model';

import { TaskComponent } from './task.component';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;
  const dummyTask: Task = {
    _id: "0",
    title: "test task",
    description: "test task description",
    dueDate: new Date(),
    complete: false
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskComponent ],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatChipsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.task = dummyTask
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
