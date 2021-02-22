import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadFetchService {
  api:string = "AIzaSyC0vgMf-vXSrsIVRNUE7STpC2zcENy125s";
  constructor(private http:HttpClient) { }

  login(email, password){
    return this.http.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC0vgMf-vXSrsIVRNUE7STpC2zcENy125s`,
      {
      email: email,
      password: password,
      returnSecureToken: true
      }
    );
  }
}
