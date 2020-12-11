import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  apiUrl = environment.apiUrl;

  constructor(private httpAuth : HttpClient) { }


   getHeroe(){
    return this.httpAuth.get(this.apiUrl).pipe(
      map((response) => response)
    );
  }
}
