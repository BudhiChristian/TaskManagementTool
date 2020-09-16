import { TestBed } from '@angular/core/testing';

import { TaskManagmentService } from './task-managment.service';

describe('TaskManagmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskManagmentService = TestBed.get(TaskManagmentService);
    expect(service).toBeTruthy();
  });
});
