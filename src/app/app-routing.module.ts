import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LoandetailapplicationnComponent } from './loandetailapplicationn/loandetailapplicationn.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { DummySettingsComponent } from './dummy-settings/dummy-settings.component'; // Ensure this component
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    children: [
      { path: 'loan-details', component: LoandetailapplicationnComponent },
      { path: 'emi-calculator', component: EmiCalculatorComponent },
      { path: 'settings', component: DummySettingsComponent }, // create this if not present
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
