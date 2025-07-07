import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoanTable } from './loandetailapplicationn/LoanTable';

@Injectable({
  providedIn: 'root'
})
export class LoandetailService {
  constructor(private http: HttpClient) {}

  getMockLoans(): Observable<LoanTable[]> {
return this.http.get<LoanTable[]>('/assets/sample-loans.json');
  }

  insertloanService(loan: LoanTable): Observable<any> {
    console.log("Inserting loan", loan);
    return new Observable(observer => {
      // mock simulation of a backend response
      setTimeout(() => {
        observer.next({ success: true });
        observer.complete();
      }, 1000);
    });
  }
}
