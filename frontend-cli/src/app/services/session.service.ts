import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  constructor() { }

  setSession(sess: string): void {
    localStorage.setItem('sess', sess);
  }

  getSession(): string {
    return localStorage.getItem('sess');
  }

  logoutSession(): void {
    localStorage.removeItem('sess');
  }
}
