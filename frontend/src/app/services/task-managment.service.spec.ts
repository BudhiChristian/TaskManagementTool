import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TaskManagmentService } from './task-managment.service';

describe('TaskManagmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TaskManagmentService
    ],
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: TaskManagmentService = TestBed.get(TaskManagmentService);
    expect(service).toBeTruthy();
  });
});
