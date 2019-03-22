import { Component, OnInit } from '@angular/core';
import {BooksService} from '../services/books.service';
import {Router} from '@angular/router';

@Component({
  selector: 'te-search-page',
  template: `
    
    <filter-list-aw [listItems]="getListItems()"
                    (reserve)="reserve($event)"
                    (scan)="scan()"
                    (read)="read($event)">
    </filter-list-aw>
  `,
  styles: [`
    .keyword { cursor: pointer }
  `]
})
export class SearchPageComponent implements OnInit {

  booksService: BooksService;
  router: Router;
  searchTerm: string = "";

  constructor(booksService: BooksService, router: Router) {
    this.router = router;
    this.booksService = booksService;
  }

  ngOnInit() {
  }

  scan() {
    this.router.navigate(['/scan']);
  }

  read(title: string) {
    this.router.navigate(['/read', title]);
  }

  reserve(title: string) {
  }

  getListItems() {
    return this.booksService.getBooks().map(book => {
      return {
        title: book.title,
        path: `/`,
        online: book.online,
        fields: [book.author]
      };
    });
  }

}
