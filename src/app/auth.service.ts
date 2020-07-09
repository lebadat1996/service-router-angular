import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;

  constructor() {
  }

  iAuthenticated(): boolean {
    return !!this.user;
  }

  // tslint:disable-next-line:typedef
  login() {
    this.user = {name: 'badat', tocken: 'tocken'};
  }

  // tslint:disable-next-line:typedef
  logout() {
    this.user = null;
  }
}
