import { Injectable } from '@angular/core';

export interface Book {
  isbn: string;
  title: string;
  author: string;
  online: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  public getBooks() {
    return this.books;
  }

  reservations: Book[] = [
    {
      isbn: "978-0-321-49836-6 ; 0-321-49836-4",
      title: "Eyetracking web usability",
      author: "Jakob Nielsen; Kara Pernice",
      online: true
    }
  ];

  books: Book[] = [
    {
      isbn: "978-0-321-49836-6 ; 0-321-49836-4",
      title: "Eyetracking web usability",
      author: "Jakob Nielsen; Kara Pernice",
      online: true
    },
    {
      isbn: "asdasdasd",
      title: "Operating Systems: Internals and Design Principles",
      author: "William Stallings",
      online: true
    },
    {
      isbn: "asdasdasd",
      title: "Principles of Computer System Design - An Introduction",
      author: "J. H. Saltzer, M. F. Kaashoek",
      online: true
    },
    {
      isbn: "asdasdasd",
      title: "Computer Networks",
      author: "Andrew S. Tanenbaum",
      online: true
    },
    {
      isbn: "asdasdasd",
      title: "Modern Operating Systems",
      author: "Andrew S. Tanenbaum",
      online: true
    },
    {
      isbn: "asdasdasd",
      title: "Rechnerorganisation und -entwurf",
      author: "D. A. Patterson, J. L. Hennessy",
      online: true
    },
    {
      isbn: "asdasdasd",
      title: "IT-Sicherheit: Konzepte - Verfahren - Protokolle",
      author: "Claudia Eckert",
      online: true
    },
    {
      isbn: "asdasdasd",
      title: "Operating Systems Concepts",
      author: "Abraham Silberschatz",
      online: true
    },
    {
      isbn: "asdasdasd",
      title: "Protocols and Architectures for Wireless Sensor Networks",
      author: "Holger Karl, Andreas Willig",
      online: true
    },
    {
      isbn: "asdasdasd",
      title: "Self-Organization in Sensor and Actor Networks",
      author: "Falko Dressler",
      online: true
    }
  ];

}
