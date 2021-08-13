import { Component } from '@angular/core';
import { CreateGridService } from './services/createGrid.service';
import { PaymentService } from './services/payment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'codeGeneratorAndPayment';
  constructor(
    private paymentService: PaymentService,
    private generator: CreateGridService
  ) {
  }

}
