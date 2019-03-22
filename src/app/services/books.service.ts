import { Injectable } from '@angular/core';

export interface Book {
  id: number,
  isbn: string;
  title: string;
  author: string;
  online: boolean;
  description?: string;
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
      id: 1,
      isbn: "978-0-321-49836-6 ; 0-321-49836-4",
      title: "Eyetracking web usability",
      author: "Jakob Nielsen; Kara Pernice",
      online: true
    }
  ];

  books: Book[] = [
    {
      id: 0,
      isbn: "978-0-321-49836-6 ; 0-321-49836-4",
      title: "Eyetracking web usability",
      author: "Jakob Nielsen; Kara Pernice",
      online: false
    },
    {
      id: 1,
      isbn: "978-0-131-27837-0 ; 0-131-27837-1",
      title: "Operating Systems: Internals and Design Principles",
      author: "William Stallings",
      online: true
    },
    {
      id: 2,
      isbn: "978-0-123-74957-4",
      title: "Principles of Computer System Design - An Introduction",
      author: "J. H. Saltzer, M. F. Kaashoek",
      online: false
    },
    {
      id: 3,
      isbn: "978-9-332-51874-2",
      title: "Computer Networks",
      author: "Andrew S. Tanenbaum",
      online: true
    },
    {
      id: 4,
      isbn: "978-0-133-59162-0",
      title: "Modern Operating Systems",
      author: "Andrew S. Tanenbaum",
      online: true,
      description: `
      Modern Operating Systems, Fourth Edition, is intended for introductory courses in Operating Systems in Computer Science, Computer Engineering, and Electrical Engineering programs.

The widely anticipated revision of this worldwide best-seller incorporates the latest developments in operating systems (OS) technologies. The Fourth Edition includes up-to-date materials on relevant OS. Tanenbaum also provides information on current research based on his experience as an operating systems researcher.

Modern Operating Systems, Third Editionwas the recipient of the 2010 McGuffey Longevity Award. The McGuffey Longevity Award recognizes textbooks whose excellence has been demonstrated over time.
      `
    },
    {
      id: 5,
      isbn: "978-3-11-044612-8",
      title: "Rechnerorganisation und -entwurf",
      author: "D. A. Patterson, J. L. Hennessy",
      online: false
    },
    {
      id: 6,
      isbn: "978-3-486-57851-5",
      title: "IT-Sicherheit: Konzepte - Verfahren - Protokolle",
      author: "Claudia Eckert",
      online: true
    },
    {
      id: 7,
      isbn: "978-0-470-12872-5",
      title: "Operating Systems Concepts",
      author: "Abraham Silberschatz",
      online: true
    },
    {
      id: 8,
      isbn: "978-0-470-09510-2",
      title: "Protocols and Architectures for Wireless Sensor Networks",
      author: "Holger Karl, Andreas Willig",
      online: false
    },
    {
      id: 9,
      isbn: "978-0-470-02820-9",
      title: "Self-Organization in Sensor and Actor Networks",
      author: "Falko Dressler",
      online: true
    }
  ];

}
