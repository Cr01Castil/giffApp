import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  get historialBusquedas():string[]{
    return this.gifsService.historial;
  }

  constructor( public gifsService:GifsService) {



   }

  ngOnInit(): void {
  }

  itemSelected(event:any){
    this.gifsService.buscarGifs(event.currentTarget.innerText)
  }

}
