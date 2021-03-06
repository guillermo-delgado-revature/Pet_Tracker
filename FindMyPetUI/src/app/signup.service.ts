import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, retry } from 'rxjs/operators';
import { Observable, of as observableOf} from 'rxjs';
import { Globals } from './globals';
import { RegisterCustomer } from './register-customer';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  /* This if you want to use httpOptions when you post the data to the database
  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}*/

  constructor(private http: HttpClient, private global: Globals, private router: Router) { }
  public  addCustomer(customerObj: RegisterCustomer) {
    //if you want you can add one more parameter httpOptions from the httpOptions commented above 
  return this.http.post(`${this.global.localHost}api/Customer/Register/`,customerObj);  
    
  }
} 

