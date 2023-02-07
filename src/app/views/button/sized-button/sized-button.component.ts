import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './sized-button.component.html',
  styleUrls: ['./sized-button.component.scss']
})
export class SizedButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: any): void {
    console.log('Sized button onClick event');
  }

}
