import { Component, OnInit } from '@angular/core';
import {BooksService} from '../services/books.service';

@Component({
  selector: 'te-reservations-page',
  template: `
    <h3>Reservations</h3>
    <table class="table table-hover">
      <tbody>
      <tr *ngFor="let item of books.reservations">
        <th scope="row">
          {{item.title}}
          <p style="font-weight: lighter">Reserved by: Max Mustermann</p>
        </th>
        <td class="text-right">
          <hideable-button-aw icon="check" label="Issue Book" (click)="issue(item.title)"></hideable-button-aw>
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

  issue(title) {
    this.books.reservations = this.books.reservations.filter(b => b.title !== title);
  }

}
