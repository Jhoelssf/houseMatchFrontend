import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-carousel-about-more',
    templateUrl: './carousel-about-more.component.html',
    styleUrls: ['./carousel-about-more.component.scss'],
})
export class CarouselAboutMoreComponent implements OnInit {
    posts: any[] = [
        {
            title: 'Mercado Inmobiliario',
            content:
                'Conoce el valor de tu inmueble con nuestra herramienta de tasación online gratuita. ¡Obten una estimacion precisa y actualizada en segundos!',
            url: 'assets/layout/images/house-match-home/carousel-about-more/house-match-guy.png',
        },
        {
            title: 'Busca tu inmueble por zonas',
            content:
                'Elige el barrio donde quiesieras vivir y encuentra la propiedad perfecta para ti. Nuestro amplio catalogo de inmuebles te ofrece opciones en los mejores vecindarios.',
            url: 'assets/layout/images/house-match-home/carousel-about-more/house-match-guy.png',
        },
        {
            title: 'Mercado Inmobiliario',
            content:
                'Conoce el valor de tu inmueble con nuestra herramienta de tasación online gratuita. ¡Obten una estimacion precisa y actualizada en segundos!',
            url: 'assets/layout/images/house-match-home/carousel-about-more/house-match-guy.png',
        },
    ];
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

    constructor() {}

    ngOnInit(): void {}
}
