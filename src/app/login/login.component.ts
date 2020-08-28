import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'First Name'
  password = ''
  InvalidLogin = false
  errorMessage = 'Invalid User'
  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  handleLogin(){
     console.log(this.username);
     console.log(this.password);
  if(this.username === 'Adithya Kamath' && this.password ==='Ramyashree1!'){
    this.router.navigate(['welcome',this.username])
    this.InvalidLogin = false;
  }
  else{
    console.log('Inside else condition');
    this.InvalidLogin= true;
  }
  }
}
