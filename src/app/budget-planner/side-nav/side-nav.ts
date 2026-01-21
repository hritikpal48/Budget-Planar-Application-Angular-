import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';


@Component({
  selector: 'app-side-nav',
  standalone: true, 
  imports: [MatIconModule],
  templateUrl: './side-nav.html',
 styleUrls: ['./side-nav.css'],
})
export class SideNav {

  isSlideOut=true;
   constructor(private router: Router) {}


  toggleSlideOut():  void{
    this.isSlideOut=!this.isSlideOut;
  }
onDash() {
    this.router.navigate(['/budget-planner/dashboard']);
  }
  onProfile() {
    this.router.navigate(['/budget-planner/profile']);
  }
  onHistory() {
    this.router.navigate(['/budget-planner/history']);
  }
  onLogout() {
    this.router.navigate(['/budget-planner/login']);
  }
}
