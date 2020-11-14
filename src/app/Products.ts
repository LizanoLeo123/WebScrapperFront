import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AmazonDefaultProducts {
  public products = [
    {
      title: 'Seagate Backup Plus Disco duro externo, Negro',
      imageUrl: 'https://m.media-amazon.com/images/I/81tjLksKixL._AC_UY218_.jpg',
      prodUrl: 'https://www.amazon.com/-/es/gp/bestsellers/pc/595048/ref=sr_bs_0_595048_1',
      price: '62.49',
      olderPrice: '62.49'
    },
    {
      title: 'Samsung SSD 860 EVO 1TB 2.5 pulgadas SATA III SSD interno (MZ-76E1T0B/AM)',
      imageUrl: 'https://m.media-amazon.com/images/I/91JA5-hAnoL._AC_UY218_.jpg',
      prodUrl: 'https://www.amazon.com/-/es/gp/bestsellers/pc/1292116011/ref=sr_bs_1_1292116011_1',
      price: '119.99',
      olderPrice: 'US$ 199.99'
    },
    {
      title: 'AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler Procesador refrigeración',
      imageUrl: 'https://m.media-amazon.com/images/I/717Di3DGIbL._AC_UY218_.jpg',
      prodUrl: 'https://www.amazon.com/-/es/Ryzen-3700X-16-Thread-Procesador-refrigeraci%C3%B3n/dp/B07SXMZLPK/ref=sr_1_3?dchild=1&qid=1604285546&s=computers-intl-ship&sr=1-3',
      price: '304.99',
      olderPrice: '304.99'
    },
    {
      title: 'Samsung 970 EVO',
      imageUrl: 'https://m.media-amazon.com/images/I/81wXcfYl6-L._AC_UY218_.jpg',
      prodUrl: 'https://www.amazon.com/-/es/MZ-V7E1T0BW-Samsung-970-EVO/dp/B07BN217QG/ref=sr_1_4?dchild=1&qid=1604285546&s=computers-intl-ship&sr=1-4',
      price: '149.99',
      olderPrice: 'US$ 179.99'
    },
    {
      title: 'WD 2TB Elements Disco duro externo portátil, USB 3.0 - WDBU6Y0020BBK-WESN',
      imageUrl: 'https://m.media-amazon.com/images/I/61IBBVJvSDL._AC_UY218_.jpg',
      prodUrl: 'https://www.amazon.com/-/es/Elements-Disco-externo-port%C3%A1til-WDBU6Y0020BBK-WESN/dp/B06W55K9N6/ref=sr_1_5?dchild=1&qid=1604285546&s=computers-intl-ship&sr=1-5',
      price: '59.99',
      olderPrice: '59.99'
    },
    {
      title: 'WD WDBWLG0120HBK-NESN - Disco duro de sobremesa (12 TB, USB 3.0)',
      imageUrl: 'https://m.media-amazon.com/images/I/716SVGVhQML._AC_UY218_.jpg',
      prodUrl: 'https://www.amazon.com/gcx/-/gfhz/events/?ref=gcx_hb_egg&categoryId=EGG-HOL20-TECH-GIFTS&pinnedAsins=B07X4V2M3B',
      price: '219.95',
      olderPrice: 'US$ 249.99'
    },
    {
      title: 'Seagate BarraCuda - Disco duro interno (HDD) para computadoras portátiles de escritorio - Embalaje sin frustración',
      imageUrl: 'https://m.media-amazon.com/images/I/71Czt9ypIbL._AC_UY218_.jpg',
      prodUrl: 'https://www.amazon.com/-/es/gp/bestsellers/pc/1254762011/ref=sr_bs_6_1254762011_1',
      price: '54.99',
      olderPrice: 'US$ 57.99'
    },
    {
      title: 'Samsung 970 EVO Plus SSD 2TB - M.2 NVMe interfaz interna unidad de estado sólido con tecnología V-NAND (MZ-V7S2T0B/AM)',
      imageUrl: 'https://m.media-amazon.com/images/I/813bvfaxuAL._AC_UY218_.jpg',
      prodUrl: 'https://www.amazon.com/-/es/Samsung-970-EVO-Plus-SSD/dp/B07MFZXR1B/ref=sr_1_8?dchild=1&qid=1604285546&s=computers-intl-ship&sr=1-8',
      price: '299.99',
      olderPrice: 'US$ 499.99'
    },
    {
      title: 'Corsair Vengeance LPX 16GB (2x8GB) DDR4 DRAM 3200MHz C16 Kit de memoria de escritorio - negro (CMK16GX4M2B3200C16)',
      imageUrl: 'https://m.media-amazon.com/images/I/51kHiPeTSmL._AC_UY218_.jpg',
      prodUrl: 'https://www.amazon.com/-/es/gp/bestsellers/pc/172500/ref=sr_bs_8_172500_1',
      price: '68.99',
      olderPrice: 'US$ 79.99'
    },
    {
      title: 'AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler. Número de años: 3 año(s)',
      imageUrl: 'https://m.media-amazon.com/images/I/71WPGXQLcLL._AC_UY218_.jpg',
      prodUrl: 'https://www.amazon.com/-/es/gp/bestsellers/pc/229189/ref=sr_bs_9_229189_1',
      price: '199.99',
      olderPrice: '199.99'
    },
    {
      title: 'Disco duro externo, Samsung T5, Negro',
      imageUrl: 'https://m.media-amazon.com/images/I/81khZx00+tL._AC_UY218_.jpg',
      prodUrl: 'https://www.amazon.com/-/es/gp/bestsellers/pc/3015429011/ref=sr_bs_10_3015429011_1',
      price: '129.99',
      olderPrice: 'US$ 249.99'
    },
    {
      title: 'AMD Ryzen 9 3900X, procesador de escritorio desbloqueado de 12 núcleos y 24 hilos.',
      imageUrl: 'https://m.media-amazon.com/images/I/71S31CWSs3L._AC_UY218_.jpg',
      prodUrl: 'https://www.amazon.com/-/es/Ryzen-3900X-procesador-escritorio-desbloqueado/dp/B07SXMZLP9/ref=sr_1_12?dchild=1&qid=1604285546&s=computers-intl-ship&sr=1-12',
      price: '458.99',
      olderPrice: 'US$ 499.00'
    },
    {
      title: 'WD Black P10 Game Drive, compatible con PS4, Xbox One, PC, Mac',
      imageUrl: 'https://m.media-amazon.com/images/I/91nz8ViqVLL._AC_UY218_.jpg',
      prodUrl: 'https://www.amazon.com/gcx/-/gfhz/events/?ref=gcx_hb_egg&categoryId=EGG-HOL20-TECH-GIFTS&pinnedAsins=B07VNTFHD5',
      price: '124.98',
      olderPrice: 'US$ 149.99'
    },
    {
      title: 'Elgato Game Capture HD, Xbox y PlayStation Grabadora de juegos de alta definici&oacute;n para Mac y PC',
      imageUrl: 'https://m.media-amazon.com/images/I/51QXd5YcvcL._AC_UY218_.jpg',
      prodUrl: 'https://www.amazon.com/-/es/gp/bestsellers/pc/6795230011/ref=sr_bs_13_6795230011_1',
      price: '156.21',
      olderPrice: 'US$ 179.99'
    },
    {
      title: 'Corsair Vengeance RGB Pro - Memoria DDR4 de 32 GB (2 x 16 GB) 3200 (PC4-25600) C16, color negro',
      imageUrl: 'https://m.media-amazon.com/images/I/81EEpt-xy0L._AC_UY218_.jpg',
      prodUrl: 'https://www.amazon.com/-/es/Corsair-Vengeance-RGB-Pro-PC4-25600/dp/B07GTG2T7L/ref=sr_1_15?dchild=1&qid=1604285546&s=computers-intl-ship&sr=1-15',      
      price: '142.99',
      olderPrice: 'US$ 154.98'
    },
    {
      title: 'Kingston SSD - HDD interno de repuesto para aumentar el rendimiento',
      imageUrl: 'https://m.media-amazon.com/images/I/91RL+MhTWbL._AC_UY218_.jpg',
      prodUrl: 'https://www.amazon.com/-/es/Kingston-SSD-repuesto-aumentar-rendimiento/dp/B01N5IB20Q/ref=sr_1_16?dchild=1&qid=1604285546&s=computers-intl-ship&sr=1-16',
      price: '27.99',
      olderPrice: 'US$ 34.99'
    }
  ]
}