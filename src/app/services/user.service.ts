import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedIn = true;

  currentUser = {
    username: "mmuster",
    name: "Max Mustermann",
    role: "student"
  };

  userRole$: BehaviorSubject<string> = new BehaviorSubject<string>(this.currentUser.role);

  constructor() {
  }

  public getUserRole(): Observable<string> {
    return this.userRole$.asObservable();
  }

  login(username, password): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.currentUser = user;
      this.userRole$.next(user.role);
      return true;
    }
    return false;
  }

  users = [
    {username: "mmuster", password: "student123", name: "Max Mustermann", role: "student"},
    {username: "johndoe", password: "staff123", name: "John Doe", role: "staffmember"}
  ];

}
