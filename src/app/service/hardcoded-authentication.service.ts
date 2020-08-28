import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  
  authenticate (username, password){
    if(username === 'Adithya Kamath' &&password ==='Ramyashree1!'){
      return true;
    }
    return false;
  }
}
