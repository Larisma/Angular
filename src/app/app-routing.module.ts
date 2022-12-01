import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAboutComponent } from './product-about/product-about.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'product',
    pathMatch: 'full'
  },

  {
    path: 'product',
    component: ProductHomeComponent

  },

  {
    path: 'about',
    component: ProductAboutComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
