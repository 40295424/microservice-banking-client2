import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Transaction } from './transaction';
import {Customer} from "../customer/customer";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private apiURL = "http://localhost:8080";
  private endpoint = "/transaction";
  private customerEndpoint = "/customer";

  /*------------------------------------------
  --------------------------------------------
  Http Header Options
  --------------------------------------------
  --------------------------------------------*/
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private httpClient: HttpClient) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  getAll(customerId: string): Observable<any> {

    return this.httpClient.get(this.apiURL +  this.customerEndpoint + "/" + customerId +  "/transactions")

      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  create(transaction: Transaction): Observable<any> {

    return this.httpClient.post(this.apiURL + this.endpoint, JSON.stringify(transaction), this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  find(id:number): Observable<any> {

    return this.httpClient.get(this.apiURL + this.endpoint + "/" + id)

      .pipe(
        catchError(this.errorHandler)
      )
  }
  /**
   * Write code on Method
   *
   * @return response()
   */
  update(id:number, transaction: Transaction): Observable<any> {

    return this.httpClient.put(this.apiURL + this.endpoint + "/" +id, JSON.stringify(transaction), this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  delete(id:number){
    return this.httpClient.delete(this.apiURL + this.endpoint + "/" +  id, {responseType: 'text'})

      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}

