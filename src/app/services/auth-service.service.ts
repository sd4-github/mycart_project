import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  setTokenWithInitialData(token: string, email: string, usertype: string, user_id: string) {
    window.sessionStorage.setItem('token', token);
    window.sessionStorage.setItem('email', email);
    window.sessionStorage.setItem('usertype', usertype);
    window.sessionStorage.setItem('user_id', user_id);
  }

  getToken() {
    return window.sessionStorage.getItem('token')
  }
  getUserId() {
    return window.sessionStorage.getItem('user_id')
  }

  getAllData() {
    const allData = [];
    allData.push(window.sessionStorage.getItem('email'), window.sessionStorage.getItem('usertype'), window.sessionStorage.getItem('user_id'));
    return allData;
  }

  destroyToken() {
    window.sessionStorage.clear();
  }
}
