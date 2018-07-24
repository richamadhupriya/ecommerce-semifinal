import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './userservice.service';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class PreventLoginGuard implements CanActivate {
  constructor(private route:Router,private userService:UserService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
    if(this.userService.getUserLoggedIn())
    {
      this.route.navigate(['']);
      return false;
    }
      return true;
  }
}
