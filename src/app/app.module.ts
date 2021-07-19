import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { AboutcomponentComponent } from './aboutcomponent/aboutcomponent.component';
import { ProjectscomponentComponent } from './projectscomponent/projectscomponent.component';
import { NovelscomponentComponent } from './novelscomponent/novelscomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomecomponentComponent,
    AboutcomponentComponent,
    ProjectscomponentComponent,
    NovelscomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
