import { Observable } from 'rxjs';
import { AuthService, AuthResponseData } from './../../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UploadFetchService } from 'src/app/shared/upload-fetch.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  userId:string = '';
  constructor(private authService:AuthService, private router: Router,private signIn:UploadFetchService) { }

  ngOnInit(): void {
  }

  login(authForm){

    const email = authForm.value.email;
    const pass = authForm.value.password;

    let authObs:Observable<AuthResponseData>;
    authObs = this.authService.login(email,pass)

    authObs.subscribe(
      resData => {

        this.router.navigate(['/admin/admin-dashboard'])
      }, error => {
          alert('Incorrect Email/Password!')
        }
    )

    // this.signIn.login(email,pass).subscribe(data => {
    //   this.userId = data['localId']
    //   // const result = this.usersData.find(id => id.userID == this.userId)
    //   try{
    //     if(email === 'coachPlayers'){
    //       this.router.navigate(['/athlete-home']);

    //       // localStorage.setItem('userData', JSON.stringify(result));
    //     }
    //     this.router.navigate(['admin/admin-dashboard'])
    //   }catch{
    //     this.router.navigate(['admin/admin-dashboard'])
    //   }
    // },
    // error => {
    //   alert('Incorrect Email/Password!')
    // })

  }
}
