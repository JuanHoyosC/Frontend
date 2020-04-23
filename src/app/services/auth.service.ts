import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:3000'
  constructor(private _http: HttpClient, private router: Router) { }

  signup(user){
    return this._http.post<any>(this.url + '/signup', user);
  }

  signin(user){
    return this._http.post<any>(this.url + '/signin', user);
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }

}
