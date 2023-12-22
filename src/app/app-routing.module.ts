import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { DailytasksComponent } from './dailytasks/dailytasks.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
 // {path:'menu',component:MenuComponent},
  {path:'weather',component:WeatherComponent},
  {path:'todolist',component:TodolistComponent,
    children:[
      {path:'dailytasks',component:DailytasksComponent}
    ]  
  }
 // {path:'todolist/dailytasks',component:DailytasksComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
