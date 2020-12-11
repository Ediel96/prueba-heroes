import { RouterModule, Routes } from '@angular/router';
import {HeroeComponent} from './components/heroe/heroe.component';
import {HeroesComponent} from './components/heroes/heroes.component';

const APP_ROUTES: Routes =[
  { path: '', component:  HeroeComponent},
  { path: 'heroe', component:  HeroeComponent},
  { path: 'heroes', component:  HeroesComponent},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:false});