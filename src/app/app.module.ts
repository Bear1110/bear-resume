import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlertModule } from 'ng2-bootstrap';
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';

import { ExpComponent } from './exp/exp.component';
import { ProjectComponent } from './project/project.component';
import { IntroductionComponent } from './introduction/introduction.component';

//router
import { AppRoutingModule } from './app-routing.module';

import { MockService } from './mock.service';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpComponent,
    ProjectComponent,
    IntroductionComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    AppRoutingModule,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics])
  ],
  providers: [
    MockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
