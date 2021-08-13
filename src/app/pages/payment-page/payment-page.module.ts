import { GeneratorGrid } from "../generator-page/generator-page.module";

export interface NewPayment {
  paymentName: string;
  amount: number;
}

export interface Payment {
  paymentName: string;
  amount: number;
  generator: GeneratorGrid;
}
