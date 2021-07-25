import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { AboutcomponentComponent } from './aboutcomponent/aboutcomponent.component';
import { ProjectscomponentComponent } from './projectscomponent/projectscomponent.component';
import { NovelscomponentComponent } from './novelscomponent/novelscomponent.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomecomponentComponent,
    AboutcomponentComponent,
    ProjectscomponentComponent,
    NovelscomponentComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
