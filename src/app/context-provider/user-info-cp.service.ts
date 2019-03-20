import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import { ContextProvider, UpdateMethod } from 'cobaui';

@Injectable()
export class UserInfoCP extends ContextProvider {

  private userService: UserService;

  constructor(userService: UserService) {
    super(UpdateMethod.EVENT_BASED);
    this.userService = userService;
    // create context parameter with initial value
    this.addContextParam({ contextOfUse: 'user', key: 'role', value: 'student' });
    this.userService.getUserRole().subscribe(role => this.updateRole(role));
  }

  updateRole(role: string) {
    this.modifyContextParam('role', role);
    this.updateContext();  // publish updated context
  }
}
