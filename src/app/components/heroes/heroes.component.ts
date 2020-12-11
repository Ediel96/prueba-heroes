import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../services/heroes.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heros;

  constructor(private heroeServ: HeroesService) { }

  ngOnInit(): void {
    this.heroeServ.getHeroe().subscribe(
      heroes => console.log(heroes)
    )
  }

}
