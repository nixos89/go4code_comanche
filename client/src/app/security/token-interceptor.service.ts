import { Injectable } from '@angular/core';
import { Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthenticationService } from 'app/security/authentication.service';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpEvent } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http/src/headers';


@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

constructor(private inj: Injector) { }

intercept(request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    const authenticationService: AuthenticationService = this.inj.get(AuthenticationService);
    request = request.clone({
      setHeaders: {
        'X-Auth-Token': `${authenticationService.getToken()}`
      }
    });

    return next.handle(request);
  }

}
