import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../services/heroes.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  
  constructor(private heroeServ: HeroesService) {  
  }

  heroes: any;
  filterPost = '';

  ngOnInit(): void {
      this.heroeServ.getHeroe().subscribe(
        res => {
          this.heroes = res,
          this.heroes = this.heroes.filter(res => res['id']  <= 20)
          , console.log(this.heroes)
        }
      )
    
      console.log(this.heroes)

  }

}
