import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  setTokenWithInitialData(token: string, firstname: string, lastname: string) {
    window.sessionStorage.setItem('token', token);
    window.sessionStorage.setItem('firstname', firstname);
    window.sessionStorage.setItem('lastname', lastname);
  }

  getToken() {
    return window.sessionStorage.getItem('token')
  }

  getAllData() {
    const allData = [];
    allData.push(window.sessionStorage.getItem('firstname'), window.sessionStorage.getItem('lastname'));
    return allData;
  }

  destroyToken() {
    window.sessionStorage.clear();
  }
}
