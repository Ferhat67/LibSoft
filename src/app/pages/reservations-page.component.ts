import { Component, OnInit } from '@angular/core';
import {BooksService} from '../services/books.service';

@Component({
  selector: 'te-reservations-page',
  template: `
    <h3>Reservations</h3>
    <table class="table table-hover">
      <tbody>
      <tr *ngFor="let item of books.getBooks()">
        <th scope="row">
          <a [routerLink]="[item.title]">{{item.title}}</a>
        </th>
        <td>{{randomUser()}}</td>
        <td class="text-right">
          <hideable-button-aw icon="check" label="Issue Book"></hideable-button-aw>
        </td>
      </tr>
      </tbody>
    </table>
  `,
  styles: []
})
export class ReservationsPageComponent implements OnInit {

  randomUser() {
    let names = ["Max Mustermann", "Erika Musterfrau", "Jane Doe", "Maria Doe"];
    return names[Math.floor(Math.random() * names.length)];
  }

  constructor(public books: BooksService) {

  }

  ngOnInit() {
  }

}
