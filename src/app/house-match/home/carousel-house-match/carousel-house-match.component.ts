import { Component, OnInit } from '@angular/core';
import { Product } from '../../../demo/api/product';
import { PhotoService } from '../../../demo/service/photo.service';
import { ProductService } from '../../../demo/service/product.service';

@Component({
    selector: 'app-carousel-house-match',
    templateUrl: './carousel-house-match.component.html',
    styleUrls: ['./carousel-house-match.component.scss'],
})
export class CarouselHouseMatchComponent implements OnInit {
    products!: Product[];
    carouselResponsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3,
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2,
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1,
        },
    ];
    constructor(private productService: ProductService, private photoService: PhotoService) {}

    ngOnInit(): void {
        this.productService.getProductsSmall().then((products) => {
            this.products = products;
        });
    }
}
