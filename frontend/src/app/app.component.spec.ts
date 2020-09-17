import { HttpClientModule } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';
import { MatButtonModule, MatChipsModule, MatDialog, MatDialogModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { TaskManagmentService } from './services/task-managment.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TaskComponent
      ],
      providers: [
        TaskManagmentService,
        MatDialog
      ],
      imports: [
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatChipsModule,
        MatDialogModule,
        MatMenuModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'frontend'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('frontend');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to frontend!');
  // });
});
