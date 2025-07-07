import { Component, OnInit } from '@angular/core';
import { LoanTable } from './LoanTable';
import { LoandetailService } from '../loandetail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loandetailapplicationn',
  templateUrl: './loandetailapplicationn.component.html',
  styleUrls: ['./loandetailapplicationn.component.css']
})
export class LoandetailapplicationnComponent implements OnInit {

  insertaLoan: LoanTable = new LoanTable();
  mockLoans: LoanTable[] = [];

  constructor(private loanService: LoandetailService, private router: Router) { }

  insertLoan() {
    this.loanService.insertloanService(this.insertaLoan).subscribe(); // mock call
  }

  goToEmployment() {
    this.router.navigate(['/employmentapplication']);
  }

  ngOnInit(): void {
    this.loanService.getMockLoans().subscribe(data => {
      this.mockLoans = data;
    });
  }
}
