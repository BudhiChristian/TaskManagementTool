import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

import { CreateTaskComponent } from './create-task.component';

describe('CreateTaskComponent', () => {
  let component: CreateTaskComponent;
  let fixture: ComponentFixture<CreateTaskComponent>;
  const mockDialogRef = {
    close: jasmine.createSpy('close')
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTaskComponent ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: mockDialogRef
        }
        
      ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should alert user on empty fields', () => {
    spyOn(window, "alert")
    component.create();
    expect(window.alert).toHaveBeenCalledWith("all fields are manditory!");
    expect(mockDialogRef.close).toHaveBeenCalledTimes(0);
  })

  it('should close on successful create', () => {
    // spyOn(mockDialogRef, "close")
    const newTask = {
      title: "test",
      description: "description",
      dueDate: new Date().toISOString()
    }
    component.title = newTask.title
    component.description = newTask.description
    component.dueDate = newTask.dueDate
    fixture.detectChanges();
    component.create()
    expect(mockDialogRef.close).toHaveBeenCalledTimes(1);
    expect(mockDialogRef.close).toHaveBeenCalledWith(newTask);
  })
});
