import { Component, OnInit } from '@angular/core';
import { AnimesService } from 'src/app/shared/services/animes.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit { //1. se coloca implement OnInit y se declara la funcion ngOnInit
animes: any;//3. se declara la variable
  constructor(private animeSService: AnimesService){}
ngOnInit(): void {
//2.esta funcion se ejecuta cuando el componente se inicializa
//console.log('me creo');

  this.animeSService.getAnimes().subscribe((res: any) => {
    //console.log(res.data);
    this.animes = res.data;
    console.log(this.animes);//4.luego se debe ir a TS de GALLERY

  })
}

}
