import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  setTokenWithInitialData(token: string, email: string, usertype: string) {
    window.sessionStorage.setItem('token', token);
    window.sessionStorage.setItem('email', email);
    window.sessionStorage.setItem('usertype', usertype);
  }

  getToken() {
    return window.sessionStorage.getItem('token')
  }

  getAllData() {
    const allData = [];
    allData.push(window.sessionStorage.getItem('email'), window.sessionStorage.getItem('usertype'));
    return allData;
  }

  destroyToken() {
    window.sessionStorage.clear();
  }
}
