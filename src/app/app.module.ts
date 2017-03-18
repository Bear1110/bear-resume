import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlertModule } from 'ng2-bootstrap';
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';

import { RouterModule, Routes } from '@angular/router';
import { ExpComponent } from './exp/exp.component';
import { ProjectComponent } from './project/project.component';
import { IntroductionComponent } from './introduction/introduction.component';

import { MockService }  from './mock.service';
const ROUTES: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    ExpComponent,
    ProjectComponent,
    IntroductionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ])
  ],
  providers: [
    MockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
