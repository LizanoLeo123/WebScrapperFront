import { Component, OnInit } from '@angular/core';
import { AmazonProductsService } from 'src/app/amazon-products.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  amazonProducts: any[] = [];
  newEggProducts: any[] = [];
  cpuBenchmarks: any[] = [];
  gpuBenchmarks: any[] = [];

  constructor(private amazonProductService: AmazonProductsService) { }

  ngOnInit(): void {
    //this.amazonProductService.showMessage();
    // this.amazonProductService.getAllProducts().subscribe((prods: {message:string, data:any[]}) => {
    //   this.amazonProducts = prods.data;
    // });
    // this.amazonProducts = this.amazonProductService.getDefaultProducts();
    // console.log(this.amazonProducts);

    // this.amazonProductService.getAmazonProducts().subscribe((prods: {message:string, data:any[]}) => {
    //   this.amazonProducts = prods.data;
    //   console.log(this.amazonProducts);
    // });


    // this.amazonProductService.getNewEggProducts().subscribe((prods: {message:string, data:any[]}) => {
    //   this.newEggProducts = prods.data;
    //   console.log(this.newEggProducts);
    // });

    // this.amazonProductService.getCPUBenchMarks().subscribe((bench: {message:string, data:any[]}) => {
    //   this.cpuBenchmarks = bench.data;
    //   console.log(this.cpuBenchmarks);
    // });
    
    // this.amazonProductService.getGPUBenchMarks().subscribe((bench: {message:string, data:any[]}) => {
    //   this.gpuBenchmarks = bench.data;
    //   console.log(this.gpuBenchmarks);
    // });

    //Final App

    this.amazonProductService.getAllProducts().subscribe((products: {
      message:string,
      data: {
        amazon:any[],
        newegg:any[]
      },
      times: {
        total:number,
        CPU:number,
        GPU:number
      }}) => {
      // alert(products.message);
      this.amazonProducts = products.data.amazon;
      this.newEggProducts = products.data.newegg;
      const totalSeconds = products.times.total/1000;
      const neweggSeconds = products.times.CPU/1000;
      const amazonSeconds = products.times.GPU/1000;
      alert("Total Products scrapping Time (seconds): " + totalSeconds +
            "\nNewEgg scrapping: " + neweggSeconds+
            "\nAmazon scrapping: " + amazonSeconds);
      //console.log(this.amazonProducts);
      //console.log(this.newEggProducts);
    });

    this.amazonProductService.getAllBenchmarks().subscribe((bench: {
      message:string,
      data: {
        CPU:any[],
        GPU:any[]
      },
      times: {
        total:number,
        CPU:number,
        GPU:number
      }
      }) => {
      // alert(products.message);
      this.cpuBenchmarks = bench.data.CPU;
      this.gpuBenchmarks = bench.data.GPU;
      const totalSeconds = bench.times.total/1000;
      const CPUseconds = bench.times.CPU/1000;
      const GPUseconds = bench.times.GPU/1000;
      alert("Total Benchmark scrapping Time (seconds): " + totalSeconds +
            "\nCPU scrapping: " + CPUseconds+
            "\nGPU scrapping: " + GPUseconds);
    });

    

  }

}
