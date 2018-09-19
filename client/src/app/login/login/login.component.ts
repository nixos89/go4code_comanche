import { Component, OnInit } from '@angular/core';

// import { AuthenticationService } from '../security/authentication.service'
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';
import { AuthenticationService } from '../../security/authentication.service';
import 'rxjs/add/observable/throw';
import { User, UserLogin } from '../../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: UserLogin;

  public wrongUsernameOrPass: boolean;

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
    this.user = {username: 'String', password: ''};
    this.wrongUsernameOrPass = false;
   }

  ngOnInit() {
    // this.user = new User(username: '',password: '' , firstname: '', lastname: '')
  }

  // login(): void {
  //   this.authenticationService.login(this.user.username, this.user.password).subscribe(
  //     (loggedIn: boolean) => {
  //       if (loggedIn) {
  //         this.router.navigate(['posts']);
  //       }
  //     }
  //   ,
  //   (err: Error) => {
  //     if ( err.toString() === 'Ilegal login') {
  //       this.wrongUsernameOrPass = true;
  //       console.log(err);
  //     } else {
  //       Observable.throw(err);
  //     }
  //   });
  // }


  login() {
    this.wrongUsernameOrPass = true;
    this.authenticationService.login(this.user.username, this.user.password)
        .subscribe(
            data => {
                this.router.navigate(['posts']);
            },
            error => {
              this.router.navigate(['login']);
              alert('Failed to login');
                // this.alertService.error(error);
                // this.loading = false;
            });
}

}
