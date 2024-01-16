import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'ecomm',
    loadChildren: () => import('./ecomm/ecomm.module').then(m => m.EcommModule)
  },
  {
    path: 'dailyinsights',
    loadChildren: () => import('./dailyinsights/dailyinsights.module').then(m => m.DailyinsightsModule)
  }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
