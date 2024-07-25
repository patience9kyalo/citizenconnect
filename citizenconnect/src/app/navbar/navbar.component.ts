import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { CommonModule } from '@angular/common';
import { AuthstatusService } from '../Services/authstatus.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  Role =localStorage.getItem('Role')
  isNavOpen = false;

  constructor(public auth: AuthstatusService, private router: Router){}

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  closeNav() {
    this.isNavOpen = false;
  }

  // showCitizenLinks():boolean{
  //   if(this.auth.isLoggedIn()&&this.Role==='citizen'){
  //     return true;
  //   }
  //   return false
  // }

  // showGvnLinks():boolean{
  //   if(this.auth.isLoggedIn()&&this.Role==='gvn'){
  //     return true;
  //   }
  //   return false
  // }

  // showAdminLinks():boolean{
  //   if(this.auth.isLoggedIn()&&this.Role==='admin'){
  //     return true;
  //   }
  //   return false
  // }


  logout() {
    localStorage.clear()
    this.router.navigate(['/home'])
    
  }


}
