import { Component, OnInit } from '@angular/core';
import { AmazonProductsService } from 'src/app/amazon-products.service';
import {EndpointsService} from "../../endpoints.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  amazonProducts: any[] = [];
  newEggProducts: any[] = [];
  cpuBenchmarks: any[] = [{nombre:'Intel Core i9', data: [{processor: 'Test',gs1080: 'Test', family: 'Test', baseBoost: 'Test',
                              memory: 'Test', power:'Test', url: 'https://images-na.ssl-images-amazon.com/images/' +
                              'I/712kBEVHeXL._AC_SL1500_.jpg'},
                              {processor: 'Test',gs1080: 'Test', family: 'Test', baseBoost: 'Test',
                                memory: 'Test', power:'Test', url: 'https://images-na.ssl-images-amazon.com/images/' +
                                  'I/712kBEVHeXL._AC_SL1500_.jpg'}
                                  ]}];
  gpuBenchmarks: any[] = [];

  constructor(private amazonProductService: AmazonProductsService, private endpointsService: EndpointsService) { }

  ngOnInit(): void {
    // this.amazonProductService.getAllProducts().subscribe((products: {
    //   message:string,
    //   data: {
    //     amazon:any[],
    //     newegg:any[]
    //   },
    //   times: {
    //     total:number,
    //     CPU:number,
    //     GPU:number
    //   }}) => {
    //   // alert(products.message);
    //   this.amazonProducts = products.data.amazon;
    //   this.newEggProducts = products.data.newegg;
    //   const totalSeconds = products.times.total/1000;
    //   const neweggSeconds = products.times.CPU/1000;
    //   const amazonSeconds = products.times.GPU/1000;
    //   alert("Total Products scrapping Time (seconds): " + totalSeconds +
    //         "\nNewEgg scrapping: " + neweggSeconds+
    //         "\nAmazon scrapping: " + amazonSeconds);
    // });
    //
    // this.amazonProductService.getAllBenchmarks().subscribe((bench: {
    //   message:string,
    //   data: {
    //     CPU:any[],
    //     GPU:any[]
    //   },
    //   times: {
    //     total:number,
    //     CPU:number,
    //     GPU:number
    //   }
    //   }) => {
    //
    //   this.cpuBenchmarks = bench.data.CPU;
    //   this.gpuBenchmarks = bench.data.GPU;
    //   const totalSeconds = bench.times.total/1000;
    //   const CPUseconds = bench.times.CPU/1000;
    //   const GPUseconds = bench.times.GPU/1000;
    //   alert("Total Benchmark scrapping Time (seconds): " + totalSeconds +
    //         "\nCPU scrapping: " + CPUseconds+
    //         "\nGPU scrapping: " + GPUseconds);
    // });
    this.getTiendas();
  }

  getTiendas(){
    this.endpointsService.getTiendas().subscribe(result =>{
      console.log(result);
    }, error => {
      console.log('No se ha podido cargar las tiendas');
    });
  }

  getCPUs(){
    this.endpointsService.getCPUs().subscribe(result =>{
      console.log(result);
    }, error => {
      console.log('No se ha podido cargar los CPUs');
    });
  }

  getGPUs(){
    this.endpointsService.getGPUs().subscribe(result =>{
      console.log(result);
    }, error => {
      console.log('No se ha podido cargar las GPUs');
    })
  }

}
