import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class EndpointsService {

  private ruta = 'https://pc-components-scraper-backend.herokuapp.com';

  constructor(private http: HttpClient) {
  }

  getTiendas(): Observable<any>{
    return this.http.get(`${this.ruta}/getTiendas`);
  }

  getCPUs() : Observable<any>{
    return this.http.get(`${this.ruta}/getCPUs`);
  }

  getGPUs() : Observable<any>{
    return this.http.get(`${this.ruta}/getGPUs`);
  }
}
