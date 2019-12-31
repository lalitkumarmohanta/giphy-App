import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { GpyHomeComponent } from './gpy-home.component';
import { SingleGpyComponent } from './single-gpy/single-gpy.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
const routes: Routes = [
  { path: '', component: GpyHomeComponent },
  { path: 'search/:id', component: GpyHomeComponent },
  { path: 'giphy/:id', component: SingleGpyComponent }

];

@NgModule({
  declarations: [
    GpyHomeComponent,
    SingleGpyComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MatProgressSpinnerModule

  ],
  exports: []
})
export class GpyHomeModule { }
