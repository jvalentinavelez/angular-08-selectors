import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CountriesRoutingModule } from './countries-routing.module';

@NgModule({
  declarations: [SelectorPageComponent],
  imports: [CommonModule, CountriesRoutingModule],
})
export class CountriesModule {}