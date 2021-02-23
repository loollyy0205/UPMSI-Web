import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import {Subject} from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from './user.model';

export interface AuthResponseData {
  idToken: string;
  email: string;
  passwordHash?: string;
  providerUserInfo?: any;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  success
  registered?: boolean;
}

@Injectable({providedIn: 'root'})

export class AuthService {


  user = new Subject<User>();
  constructor(private http:HttpClient){
  }

  login(email, password){
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC0vgMf-vXSrsIVRNUE7STpC2zcENy125s`,
      {
      email: email,
      password: password,
      returnSecureToken: true
      }
    ).pipe(
      tap(resData => {
        this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
      })
    );
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ){
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new User(email, userId,token, expirationDate);
        this.user.next(user);
  }
}
