import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginType: 'user' | 'admin' = 'user';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  setLoginType(type: 'user' | 'admin'): void {
    this.loginType = type;

    // Toggle button styling manually (optional, otherwise use ngClass in HTML)
    const userBtn = document.getElementById('userBtn');
    const adminBtn = document.getElementById('adminBtn');
    if (userBtn && adminBtn) {
      userBtn.classList.toggle('active', type === 'user');
      adminBtn.classList.toggle('active', type === 'admin');
    }
  }

  navigateToLogin(): void {
    if (this.loginType === 'user') {
      this.router.navigate(['/user-dashboard']);
    } else {
      this.router.navigate(['/admin-login']);
    }
  }
}
