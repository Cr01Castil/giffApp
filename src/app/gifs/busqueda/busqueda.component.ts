import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor(private gifService:GifsService) { }

  ngOnInit(): void {
  }

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  buscar(){

    const valor=this.txtBuscar.nativeElement.value;
    console.log(valor);
    if (valor.trim().length==0){
      return;
    }
    this.gifService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value="";
  }
}
