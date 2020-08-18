import { PrintTicket } from '../models/printticket';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class PrintTicketService{

    //ticket: PrintTicket[];
    constructor(private http:HttpClient){
        //this.ticket=[];
    }
    public displayTicket(ticket: any){
        return this.http.post<any>("http://localhost:51455/api/Admin",ticket);
    }
}