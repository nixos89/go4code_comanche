import { Injectable } from '@angular/core';

@Injectable()
export class JwtUtilsService {

constructor() { }
getRoles(token: string) {
    const jwtData = token.split('.')[1];
    const decodedJwtJsonData = window.atob(jwtData);
    const decodedJwtData = JSON.parse(decodedJwtJsonData);
    return decodedJwtData.roles.map(x => x.authority) || [];
  }

}
