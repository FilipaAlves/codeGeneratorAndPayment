import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { GeneratorPageComponent } from './pages/generator-page/generator-page';
import { PaymentPageComponent } from './pages/payment-page/payment-page';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule  } from "@angular/material/button";
@NgModule({
  declarations: [
    AppComponent,
    GeneratorPageComponent,
    PaymentPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    MatButtonModule
  ],
  providers: [
    GeneratorPageComponent,
    PaymentPageComponent  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
