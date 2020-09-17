import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskManagmentService } from './services/task-managment.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TaskComponent } from './components/task/task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatChipsModule, MatDialogModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { CreateTaskComponent } from './components/create-task/create-task.component';

const materialImports = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatChipsModule,
  MatDialogModule
]

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ...materialImports
  ],
  providers: [
    TaskManagmentService
  ],
  entryComponents: [
    CreateTaskComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
