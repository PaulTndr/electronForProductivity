import { NgModule } from '@angular/core';
import { NgxElectronModule } from 'ngx-electron';

import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { MenuComponent } from './menu/menu.component';
import { StatisticsComponent } from './statistics/statistics.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, MenuComponent, StatisticsComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule,NgxElectronModule]
})
export class HomeModule {}
