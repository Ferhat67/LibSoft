import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'te-read-page',
  template: `
    <h3>Scan a QR code to find or reserve a book</h3>
    <div class="d-flex flex-row">
      <div class="my-auto" style="width:1000px;height:1000px;background:black"></div>
    </div>
  `,
  styles: []
})
export class ScanPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
