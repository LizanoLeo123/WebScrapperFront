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
    // this.amazonProductService.getAllProducts().subscribe((prods: {products:any[]}) => {
    //   this.amazonProducts = prods.products;
    // });
    this.amazonProducts = this.amazonProductService.getDefaultProducts();
    console.log(this.amazonProducts);

    // this.amazonProductService.getNewEggProducts().subscribe((prods: {message:string, data:any[]}) => {
    //   this.newEggProducts = prods.data;
    //   console.log(this.newEggProducts);
    // });

    this.amazonProductService.getCPUBenchMarks().subscribe((bench: {message:string, data:any[]}) => {
      this.cpuBenchmarks = bench.data;
      console.log(this.cpuBenchmarks);
    });
    
    this.amazonProductService.getGPUBenchMarks().subscribe((bench: {message:string, data:any[]}) => {
      this.gpuBenchmarks = bench.data;
      console.log(this.gpuBenchmarks);
    });

  }

}
