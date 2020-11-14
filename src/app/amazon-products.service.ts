import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { AmazonDefaultProducts } from 'src/app/Products'

@Injectable({
  providedIn: 'root'
})
export class AmazonProductsService {

  private SERVER_URL = environment.SERVER_URL;

  constructor(private http: HttpClient, private defaultProducts: AmazonDefaultProducts) { }

  showMessage() {
    console.log('Service Called');
  }

  getAmazonProducts() {
    return this.http.get(this.SERVER_URL + '/amazonProducts');
  }

  getNewEggProducts() {
    return this.http.get(this.SERVER_URL + '/newEggProducts')
  }

  getAllProducts() {
    return this.http.get(this.SERVER_URL + '/retailProducts')
  }

  getCPUBenchMarks(){
    return this.http.get(this.SERVER_URL + '/benchmarksCPU')
  }

  getGPUBenchMarks(){
    return this.http.get(this.SERVER_URL + '/benchmarksGPU')
  }

  getAllBenchmarks(){
    return this.http.get(this.SERVER_URL + '/benchmarks')
  }

  getDefaultProducts() {
    return this.defaultProducts.products;
  }
}
