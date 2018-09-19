import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtUtilsService } from './jwt-utils.service';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class AuthenticationService {
    private readonly loginPath = '/api/login';
constructor(private http: HttpClient, private jwtUtilsService: JwtUtilsService) { }

// login(username: String, password: String): Observable<boolean> {
//     // const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
//     return this.http.post(this.loginPath, JSON.stringify({ username, password }), /*{ headers }*/)
//       .map((res: any) => {
//         const token = res && res['token'];
//         if (token) {
//           localStorage.setItem('currentUser', JSON.stringify({
//                                     username: username,
//                                     roles: this.jwtUtilsService.getRoles(token),
//                                     token: token
//                                   }));
//           return true;
//         } else {
//           return false;
//         }
//       })
//       .catch((error: any) => {
//         if (error.status === 400) {
//           return Observable.throw('Ilegal login');
//         } else {
//           return Observable.throw(error.json().error || 'Server error');
//         }
//       });
//   }

login(username: String, password: String) {
  const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post<any>('/api/login', JSON.stringify({ username: String, password: String }), {headers})
      .map(user => {
          // login successful if there's a jwt token in the response
          if (user && user.token) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));
          }

          return user;
      });
}


  // login(username: string, password: string): Promise<any> {
  //   return this.http
  //     .post('/api/login', {username, password}, {responseType: 'text'})
  //     .toPromise()
  //     .then(res => localStorage.setItem('token', res))
  //     .catch(this.handleError);
  //   }

  getToken(): String {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const token = currentUser && currentUser.token;
    return token ? token : '';
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    if (this.getToken() != '') {
        return true;
    } else {
    return false;
    }
  }

  getCurrentUser() {
    if (localStorage.currentUser) {
      return JSON.parse(localStorage.currentUser);
    } else {
      return undefined;
    }
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
}

}
