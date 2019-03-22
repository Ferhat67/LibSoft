import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Book, BooksService} from '../services/books.service';

@Component({
  selector: 'te-book-detail-page',
  template: `
    <h3>{{book?.title}}</h3>
    <p>ISBN: {{book?.isbn}}</p>
    <p>Author(s): {{book?.author}}</p>
    
    <p *ngIf="book?.online">
      Available in digital format: <a [routerLink]="['/read', book?.title]">Read here</a>
    </p>
    
    <button class="btn-primary" (click)="reserve()">Reserve</button>
    <br>
    <br>
    <p>Description: </p>
    <p *ngIf="!book?.description">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </p>
    <p *ngIf="book?.description">{{book?.description}}</p>
  `,
  styles: [`
    a {
      color: darkgray;
      font-weight: 800;
    }
  `]
})
export class BookDetailPageComponent implements OnInit {

  book: Book;

  constructor(route: ActivatedRoute, public bookService: BooksService) {
    const id = route.snapshot.paramMap.get('id') || 0;
    this.book = this.bookService.getBooks().find(b => b.title == id);
  }

  ngOnInit() {
  }

  reserve() {
    this.bookService.reservations.push(this.book);
  }
}
