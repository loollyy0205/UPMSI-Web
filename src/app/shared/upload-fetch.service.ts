import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

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

  onSubmit(name:{name:string}){
    this.http.post('https://upmsi-d03af-default-rtdb.firebaseio.com/home-headline.json', name)
      .subscribe(responseData => console.log(responseData));
  }

  onFetchHomeHeadline(){
    return this.http.get('https://upmsi-d03af-default-rtdb.firebaseio.com/home-headline.json')
    .pipe(
      map(responseData => {
        const schedule = [];
        for(const key in responseData){
          schedule.push({...responseData[key], id:key});
        }
        return schedule;
      })
    );
  }

  // onUpdate(id:string){
  //   this.http.patch('https://upmsi-d03af-default-rtdb.firebaseio.com/home-headline'+  +'.json')
  // }
}
