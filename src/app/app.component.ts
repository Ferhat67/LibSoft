import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TextElements';
  menuItems = [
    {icon: 'search', label: 'Search', path: '/'},
    {icon: 'book', label: 'Borrowed', path: '/check'},
    {icon: 'book', label: 'Reservations', path: '/reservations'},
    {icon: 'logout', label: 'Logout', path: '/logout'}
  ];

  constructor() {
  }

}
