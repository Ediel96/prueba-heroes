import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { APP_ROUTING } from './app.routes';
import { HeaderComponent } from './components/layout/header/header.component';
import { NavComponent } from './components/layout/nav/nav.component';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './components/pipe/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    HeroesComponent,
    HeaderComponent,
    NavComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
