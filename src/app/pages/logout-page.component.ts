import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'te-logout-page',
  template: `
    <h3>Login</h3>
    <div class="container">
      <div class="row">
        <div class="col-4">
          <div class="form-group">
            <label>Username</label>
            <input type="text" class="form-control" [(ngModel)]="username">
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" [(ngModel)]="password">
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" (click)="login()">Login</button>
          <p *ngIf="loginFailed">Login failed.</p>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class LogoutPageComponent implements OnInit {

  userService: UserService;
  router: Router;
  loginFailed: boolean = false;
  username: string = "";
  password: string = "";

  constructor(userService: UserService, router: Router) {
    this.userService = userService;
    this.router = router;
  }

  login() {
    if (this.userService.login(this.username, this.password)) {
      this.router.navigate(['/']);
    }
    else {
      this.loginFailed = true;
    }
  }

  ngOnInit() {
  }

}
