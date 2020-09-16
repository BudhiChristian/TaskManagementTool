import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskManagmentService } from './services/task-managment.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TaskComponent } from './components/task/task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';

const materialImports = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule
]

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
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
  bootstrap: [AppComponent]
})
export class AppModule { }
