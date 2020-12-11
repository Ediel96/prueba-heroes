import { RouterModule, Routes } from '@angular/router';
import {HeroeComponent} from './components/heroe/heroe.component';
import {HeroesComponent} from './components/heroes/heroes.component';

const APP_ROUTES: Routes =[
  { path: '', component:  HeroesComponent},
  { path: 'heroes', component:  HeroesComponent},
  { path: 'heroe', component:  HeroeComponent},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:false});