import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { Payment } from '../pages/payment-page/payment-page.module';

@Injectable({
  providedIn: 'root'
})
export class PaymentService{

  payments$ = new BehaviorSubject<Payment[]>([])

  constructor(
  ) {}

  addPayment(payment: Payment) {
    const newPayment: Payment[] = [... this.payments$.value, payment]
    this.payments$.next(newPayment)
  }
}
