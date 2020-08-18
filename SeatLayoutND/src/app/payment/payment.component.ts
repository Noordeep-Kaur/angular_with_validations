import { Component, OnInit } from '@angular/core';
import {PaymentService} from '../services/paymentService';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private payServ:PaymentService) { }

  ngOnInit() {
  }

  // postToTicketTable()
  // {
  //   // this.payServ.postTicketValues().subscribe((data)=>{
  //   //   console.log(data)
  // })
  
 
}
