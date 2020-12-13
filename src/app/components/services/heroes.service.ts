import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  apiUrl = environment.apiUrl;

  constructor(private httpAuth : HttpClient) { }


   getHeroe(){
    return this.httpAuth.get(this.apiUrl+`/all.json`).pipe(
      map(res => res )
    );    
  }

  getHeroeId(id: number){
    return this.httpAuth.get(`${this.apiUrl}/id/${id}.json`).pipe(
      map(res => res)
    );
  }
}