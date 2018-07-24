import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../userservice.service'
import { AppComponent} from '../app.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName:string;
  password:string;
  //router:Router;
  //loggerDemo = new AppComponent();
  USER = {'username':'admin','password':'admin'}
  
  constructor(private router:Router, private userService:UserService) { }
  validateUser(event:any){
    event.preventDefault()
    let user = event.target.elements[0].value;
    let pass = event.target.elements[1].value;
    if(user==this.USER.username && pass == this.USER.password)
    {
      this.userService.setUserLoggedIn(user);
      this.router.navigate(['home']);
    }
  }
  ngOnInit() {
    console.log(this.userService.username)
  }

}
