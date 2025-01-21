import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  url = "http://localhost:8085/api/auth";

  constructor(private http: HttpClient) { }

  generateToken(loginData: any) {

    return this.http.post(`${this.url}/login`, loginData)
  }


  loggeninUser(token: any) {
    localStorage.setItem("token", token)
    return true;
  }

  isLoggedIn() {
    let token = localStorage.getItem("token");
    if (token == undefined || token == '' || token == null) {
      return false
    } else {
      return true;
    }
  }

  logOut() {
    localStorage.removeItem("token");
    return true;
  }

  getToken(): string {
    const tokenObj = JSON.parse(localStorage.getItem("token") || '{}')
    return tokenObj.token || '';
  }

  decodeToken(token: string) {
    const decodedToken = jwtDecode(token);
    return decodedToken;
  }

  getUserFromToken(token: string) {
    return this.decodeToken(token)
  }

}
