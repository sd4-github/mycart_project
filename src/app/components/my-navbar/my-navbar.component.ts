import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthServiceService } from "src/app/services/auth-service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-navbar',
  templateUrl: './my-navbar.component.html',
  styleUrls: ['./my-navbar.component.css']
})
export class MyNavbarComponent {
  token;
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private storagesrvc: AuthServiceService, private router:Router) {
    this.token=this.storagesrvc.getToken();
  }

  onLogout() {
    this.storagesrvc.destroyToken();
    this.router.navigate(['/login']);
  }

}
