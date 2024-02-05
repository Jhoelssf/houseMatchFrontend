import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-comparator-view',
    templateUrl: './comparator-view.component.html',
    styleUrls: ['./comparator-view.component.scss'],
})
export class ComparatorViewComponent implements OnInit {
    itemsToCompare: any[] = [
        {
            title: 'Departamento de 200m2, en la zona Residencial de Pueblo Libre',
        },
        {
            title: 'Departamento de 200m2, en la zona Residencial de Miraflores',
        },
        {
            title: 'Departamento de 200m2, en la zona Residencial de San Miguel, a 2 cuadras del mar',
        },
    ];

    itemsToCompareDetails: any[] = [
        {
            headerTitle: 'Ubicación',
            infoCompare: [
                {
                    itemSubList: [
                        {
                            text: 'Pueblo Libre, Lima',
                        },
                    ],
                },
                {
                    itemSubList: [
                        {
                            text: 'Miraflores, Lima',
                        },
                    ],
                },
                {
                    itemSubList: [
                        {
                            text: 'San Miguel, Lima',
                        },
                    ],
                },
            ],
        },
        {
            headerTitle: 'Precio',
            infoCompare: [
                {
                    itemSubList: [
                        {
                            text: 'S/. 1,000,000',
                        },
                    ],
                },
                {
                    itemSubList: [
                        {
                            text: 'S/. 1,200,000',
                        },
                    ],
                },
                {
                    itemSubList: [
                        {
                            text: 'S/. 1,300,000',
                        },
                    ],
                },
            ],
        },
        {
            headerTitle: 'Características',
            infoCompare: [
                {
                    itemSubList: [
                        {
                            text: '3 Dormitorios',
                        },
                        {
                            text: '2 Baños',
                        },
                        {
                            text: '2 Cocheras',
                        },
                    ],
                },
                {
                    itemSubList: [
                        {
                            text: '3 Dormitorios',
                        },
                        {
                            text: '2 Baños',
                        },
                        {
                            text: '2 Cocheras',
                        },
                    ],
                },
                {
                    itemSubList: [
                        {
                            text: '3 Dormitorios',
                        },
                        {
                            text: '2 Baños',
                        },
                        {
                            text: '2 Cocheras',
                        },
                    ],
                },
            ],
        },
        {
            headerTitle: 'Zonas comunes',
            infoCompare: [
                {
                    itemSubList: [
                        {
                            text: 'Piscina',
                        },
                        {
                            text: 'Gimnasio',
                        },
                        {
                            text: 'Zona de Parrilla',
                        },
                    ],
                },
                {
                    itemSubList: [
                        {
                            text: 'Piscina',
                        },
                        {
                            text: 'Gimnasio',
                        },
                        {
                            text: 'Zona de Parrilla',
                        },
                    ],
                },
                {
                    itemSubList: [
                        {
                            text: 'Piscina',
                        },
                        {
                            text: 'Gimnasio',
                        },
                        {
                            text: 'Zona de Parrilla',
                        },
                    ],
                },
            ],
        },
        {
            headerTitle: 'Contacto',
            infoCompare: [
                {
                    itemSubList: [
                        {
                            text: 'Agente: Juan Perez',
                        },
                        {
                            text: 'Teléfono: 987654321',
                        },
                        {
                            text: 'Correo: asd@gmail.com',
                        },
                    ],
                },
                {
                    itemSubList: [
                        {
                            text: 'Agente: Juan Perez',
                        },
                        {
                            text: 'Teléfono: 987654321',
                        },
                        {
                            text: 'Correo: asd@gmail.com',
                        },
                    ],
                },
                {
                    itemSubList: [
                        {
                            text: 'Agente: Juan Perez',
                        },
                        {
                            text: 'Teléfono: 987654321',
                        },
                        {
                            text: 'Correo: asd@gmail.com',
                        },
                    ],
                },
            ],
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
