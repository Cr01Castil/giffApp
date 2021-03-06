import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interfaces';
import {ApiService } from './ServicesT/api.service';

@Injectable({
  providedIn: 'root',
})
export class GifsService {

  private apiKey : string ="xVCJfdRjAkv2ETyTPawfhX2YaSrwuV2u";

  private _historial: string[] = [];

  public resultados: Gif[]=[];


  get historial() {
    return [...this._historial];
  }


  /**
   *
   */
  constructor(private http:HttpClient,private apiService:ApiService) { 
   this._historial= JSON.parse( localStorage.getItem('historial')!) || []
   this.resultados= JSON.parse( localStorage.getItem('resultadosGifs')!) || []

  }


  buscarGifs(query: string) {
    query = query.trim().toLocaleLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial',JSON.stringify(this._historial))
    }

    const params = new HttpParams()
    .set('api_key',this.apiKey)
    .set('limit','10')
    .set('q',query);
    

  
    this.apiService.GET<SearchGifsResponse>('https://api.giphy.com/','v1/','gifs/search',params)
     .subscribe((resp) =>{
      this.resultados=resp.data
      localStorage.removeItem('resultadosGifs');
      localStorage.setItem('resultadosGifs',JSON.stringify(this.resultados))
      })

    // this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`)
    // .subscribe((resp) =>{
    //   this.resultados=resp.data
    //   localStorage.removeItem('resultadosGifs');
    //   localStorage.setItem('resultadosGifs',JSON.stringify(this.resultados))
     
    // })


  }
}
