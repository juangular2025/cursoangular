import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Catalogo } from './catalogo/catalogo';
import { Registro } from './registro/registro';
import { Login } from './login/login';
import { Detalle } from './detalle/detalle';
import { Contador } from './contador/contador';
import { Contact } from './contact/contact';

export const routes: Routes = [
    {
        path: 'login',
        component: Login
    },
    {
        path: 'registro',
        component: Registro
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'catalogo',
        component: Catalogo
    },
    {
        path: 'detalle',
        component: Detalle
    },
    {
        path: 'contador',
        component: Contador
    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path: '**',
        component: Login
    },
];
