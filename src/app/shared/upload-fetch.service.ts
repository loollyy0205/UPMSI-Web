import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadFetchService {
  private dataGallery = new BehaviorSubject<any>(null);
  message$ = this.dataGallery.asObservable();


  api:string = "AIzaSyC0vgMf-vXSrsIVRNUE7STpC2zcENy125s";
  constructor(private http:HttpClient) { }

  sendData(title:{}){
    this.dataGallery.next(title)
  }

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
        const headline = [];
        for(const key in responseData){
          headline.push({...responseData[key], id:key});
        }
        return headline;
      })
    );
  }

  onFetchHomeContent(){
    return this.http.get('https://upmsi-d03af-default-rtdb.firebaseio.com/home-content.json')
    .pipe(
      map(responseData => {
        const content = [];
        for(const key in responseData){
          content.push({...responseData[key], id:key});
        }
        return content;
      })
    );
  }

  onFetchHomeLink(){
    return this.http.get('https://upmsi-d03af-default-rtdb.firebaseio.com/home-link.json')
    .pipe(
      map(responseData => {
        const link = [];
        for(const key in responseData){
          link.push({...responseData[key], id:key});
        }
        return link;
      })
    );
  }
  onUpdateImage(id:string, img:string){
    this.http.patch('https://upmsi-d03af-default-rtdb.firebaseio.com/home-headline/'+ id +'.json',
    {"bgImage": img}).subscribe(resdata => console.log(resdata));
  }

  onUpdateHeadline(id:string, headContent:string){
    this.http.patch('https://upmsi-d03af-default-rtdb.firebaseio.com/home-headline/'+ id +'.json',
    {"headline": headContent}).subscribe(resdata => console.log(resdata));
  }

  onUpdateContent(id:string, content:string){
    this.http.patch('https://upmsi-d03af-default-rtdb.firebaseio.com/home-content/'+ id +'.json',
    {"content": content}).subscribe(resdata => console.log(resdata));
  }

  onUpdateLinks(id:string, link:string){
    this.http.patch('https://upmsi-d03af-default-rtdb.firebaseio.com/home-link/'+ id +'.json',
    {"link": link}).subscribe(resdata => console.log(resdata));
  }
}
