import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { HeroesService } from '../../services/heroes.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private heroeServ: HeroesService) { }

  heroes;

  ngOnInit(): void {
  }

  buscarHeroe(termino : string){
    // termino = termino.toLowerCase();

    console.log(termino)

    this.heroeServ.getHeroe().subscribe(
      res => {
        this.heroes = res,
        this.heroes = this.heroes.filter(res => res['name'] == termino.indexOf)
        , console.log(this.heroes)
      }
    )
  }
}
