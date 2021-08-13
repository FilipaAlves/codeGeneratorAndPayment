import { Component } from '@angular/core';
import { GeneratorPageComponent } from './pages/generator-page/generator-page';
import { PaymentService } from './services/payment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  constructor(
    private paymentService: PaymentService,
    private generator: GeneratorPageComponent
  ) {
  }

}
