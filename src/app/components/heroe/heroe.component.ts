import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe;

  constructor( private actvRouter : ActivatedRoute ,private heroeServ: HeroesService) { }

  ngOnInit(): void {

    this.actvRouter.params.subscribe(params =>{
       this.heroeServ.getHeroeId(params['id'])
          .subscribe(res =>{
          this.heroe = res,
          console.log(res)
      })
    })

  }

  

}
