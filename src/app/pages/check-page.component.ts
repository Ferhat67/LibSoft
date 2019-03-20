import { Component, OnInit } from '@angular/core';
import {BooksService} from '../services/books.service';

@Component({
  selector: 'te-reservations-page',
  template: `
    <h3>Borrowed Books</h3>
    <table class="table table-hover">
      <tbody>
      <tr *ngFor="let item of books.getBooks()">
        <th scope="row">
          <a [routerLink]="[item.title]">{{item.title}}</a>
        </th>
        <td>{{randomDate()}}</td>
      </tr>
      </tbody>
    </table>
  `,
  styles: []
})
export class CheckPageComponent implements OnInit {

  randomDate() {
    let names = ["Max Mustermann", "Erika Musterfrau", "Jane Doe", "Maria Doe"];

    let date = new Date(Date.now() + (1000 /*sec*/ * 60 /*min*/ * 60 /*hour*/ * 24 /*day*/ * 10));
    return date.toDateString();

    return names[Math.floor(Math.random() * names.length)];
  }

  constructor(public books: BooksService) {

  }

  ngOnInit() {
  }

}
