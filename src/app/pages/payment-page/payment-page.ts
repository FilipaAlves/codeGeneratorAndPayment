import { Component, OnInit } from '@angular/core';
import { CreateGridService } from '../../services/createGrid.service';
import { PaymentService } from '../../services/payment.service';
import { GeneratorGrid } from '../generator-page/generator-page.module';
import { NewPayment, Payment } from './payment-page.module';

@Component({
  selector: '/payment-page',
  templateUrl: './payment-page.html',
  styleUrls: ['./payment-page.css']
})
export class PaymentPageComponent implements OnInit {

  newPayment: NewPayment = {} as NewPayment;

  currentGrid$ = this.createGridService.currentGrid$;

  payment: Payment = {} as Payment;
  time$ = this.createGridService.timer$;
  currentGrid: GeneratorGrid = {} as GeneratorGrid;
  running$ = this.createGridService.running$;
  payments = this.paymentService.payments$;

  constructor(
    public createGridService: CreateGridService,
    public paymentService: PaymentService
  ) {
    this.currentGrid$.subscribe(currentGrid => this.currentGrid = currentGrid);
    this.running$ = this.createGridService.running$;
    
  }
  ngOnInit(): void {  
  }

  addNewPayment() {
    this.payment = {
      amount: this.newPayment.amount,
      paymentName: this.newPayment.paymentName,
      generator : this.currentGrid$.value
    }
    this.paymentService.addPayment(this.payment);
    this.newPayment = {} as NewPayment;
  }
}
