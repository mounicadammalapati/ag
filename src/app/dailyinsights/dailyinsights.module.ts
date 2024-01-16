import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyinsightsRoutingModule } from './dailyinsights-routing.module';
import { InsightComponent } from './insight/insight.component';


@NgModule({
  declarations: [
    InsightComponent
  ],
  imports: [
    CommonModule,
    DailyinsightsRoutingModule
  ]
})
export class DailyinsightsModule { }
