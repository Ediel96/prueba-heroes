import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../services/heroes.service'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  hero;

  constructor( private heroeServ: HeroesService) { }

  ngOnInit(): void {
    this.heroeServ.getHeroe().subscribe(
      heroe => this.hero = heroe
    )
  }

  

}
