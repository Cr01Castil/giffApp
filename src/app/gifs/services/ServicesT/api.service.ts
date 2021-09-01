import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse } from '../../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  //public async Task<Response> Get<T>(string urlBase, string servicePrefix, string controller, string tokenType, string accessToken)

  public GET<T>(
    urlBase: string,
    servicePrefix: string,
    controller: string,
    params?: HttpParams,
    headers?: HttpHeaders
  ) {
    const api = urlBase + servicePrefix + controller;
    return this.http.get<T>(api, {params ,headers});
  }
}
