import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor() { }
  getToken(){
    //The token is simply stored and retrieved from the environment.ts for demo purposes
    return environment.token;
  }
}
