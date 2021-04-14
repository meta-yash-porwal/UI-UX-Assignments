import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomNavbarComponent } from './custom-navbar/custom-navbar.component';
import { TaskComponentComponent } from './task-component/task-component.component';

import {ReactiveFormsModule} from '@angular/forms'
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    CustomNavbarComponent,
    TaskComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
