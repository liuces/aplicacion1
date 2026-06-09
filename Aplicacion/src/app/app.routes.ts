import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio-sesion',
    pathMatch: 'full',
  },
  {
    path: 'main',
    loadComponent: () => import('./main/main.page').then(m => m.MainPage),
  },
  {
    path: 'comida',
    loadComponent: () => import('./comida/comida.page').then(m => m.ComidaPage),
  },
  {
    path: 'inicio-sesion',
    loadComponent: () => import('./inicio-sesion/inicio-sesion.page').then(m => m.InicioSesionPage),
  },
  {
    path: 'registrarse',
    loadComponent: () => import('./registrarse/registrarse.page').then(m => m.RegistrarsePage),
  },
  {
    path: 'compra',
    loadComponent: () => import('./compra/compra.page').then(m => m.CompraPage),
  },
  {
    path: 'gps',
    loadComponent: () => import('./gps/gps.page').then(m => m.GpsPage),
  },
  {
    path: 'agradecimiento',
    loadComponent: () => import('./agradecimiento/agradecimiento.page').then(m => m.AgradecimientoPage),
  },
  {
    path: '**',
    redirectTo: 'inicio-sesion',
    pathMatch: 'full',
  },
];
