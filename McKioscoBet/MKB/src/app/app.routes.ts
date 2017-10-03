import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/sheard/navbar/navbar.component';

import { AnimalesComponent } from './components/bets/animales/animales.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { TiketsComponent } from './components/venta/tikets/tikets.component';


const app_routes: Routes = [
  { path: 'Animalitos', component: AnimalesComponent },
  { path: 'Ganadores', component: TiketsComponent },
  { path: 'Reportes', component: ReportesComponent },
  /*{
    path: 'Disable',
    component: DisableComponent,
    canActivate: [AuthGuardService]
  },*/
  { path: '**', pathMatch: 'full', redirectTo: 'Animalitos' }
];

export const app_routing = RouterModule.forRoot(app_routes);
