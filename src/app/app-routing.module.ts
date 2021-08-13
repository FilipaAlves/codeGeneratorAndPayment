import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneratorPageComponent } from './pages/generator-page/generator-page';
import { PaymentPageComponent } from './pages/payment-page/payment-page';

const routes: Routes = [

  { path: '', redirectTo: '/generator', pathMatch: 'full' },
  { path: 'generator', component: GeneratorPageComponent },
  { path: 'payment', component: PaymentPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
