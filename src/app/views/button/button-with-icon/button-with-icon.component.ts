import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './button-with-icon.component.html',
  styleUrls: ['./button-with-icon.component.scss']})
export class ButtonWithIconComponent implements OnInit {

  constructor() {
    console.log('buttonWithIcon');
  }

  ngOnInit(): void {
  }

  onClick(event){
    console.log(event.target.value);
  }

}
