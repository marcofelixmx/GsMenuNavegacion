import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'menu',
        loadComponent: () => import('./menu/menu.component').then(c => c.MenuComponent),
       children:[
        {
            path:'inicio',
            title:'Inicio',
            loadComponent: () => import('./menu/pages/inicio/inicio.component').then(c => c.InicioComponent),
        },
        {
            path: 'carousel',
            title:'Carousel',
            loadComponent: () => import('./menu/pages/carousel/carousel.component').then(c => c.CarouselComponent),
        },
        {
            path: 'empleados',
            title:'Empleados',
            loadComponent: () => import('./menu/pages/empleados/empleados.component').then(c => c.EmpleadosComponent),

        },
        {
            path:'contacto',
            title:'Contactanos',
            loadComponent:() => import("./menu/pages/contacto/contacto.component").then(c => c.ContactoComponent)
        },
        {
            path: '',
            redirectTo: 'inicio',
            pathMatch: 'full'
        }
       ]
    },
    {
        path: '',
        redirectTo: '/menu',
        pathMatch: 'full'
    }

];
