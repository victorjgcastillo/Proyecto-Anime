import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//los servicios son utilizables en cualquier parte de la aplicaicon
export class AnimesService {

  constructor(private http: HttpClient) { }//luego de importar el HttpClient se puede declarar en la fncion

  getAnimes(filter = ""){
    return this.http.get("https://kitsu.io/api/edge/trending/anime?limit=6")//luego se puede usar la fncion en la pagina principal
  }

  //getAnime(){

  //}

  //postAnime(){

  //}

  //putAnime(){

  //}
}
