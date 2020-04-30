import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//para las rutas
import { routing, appRoutingProviders } from './app.routing';

//for transitions
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SkillsComponent } from './views/skills/skills.component';
import { ContactComponent } from './views/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { MusicComponent } from './components/music/music.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,
    NavbarComponent,
    SkillsComponent,
    ContactComponent,
    ErrorComponent,
    MusicComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    routing,
    HttpClientModule,
    FormsModule,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }