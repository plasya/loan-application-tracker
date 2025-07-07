import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  showWelcome: boolean = true;

  constructor() { }

  ngOnInit(): void {}

  onRouteChange(): void {
    this.showWelcome = false;
  }
}