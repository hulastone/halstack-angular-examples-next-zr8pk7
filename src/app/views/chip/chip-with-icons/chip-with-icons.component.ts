import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chip-with-icons',
  templateUrl: './chip-with-icons.component.html',
  styleUrls: ['./chip-with-icons.component.scss']
})
export class ChipWithIconsComponent implements OnInit {

  iconPath = "https://img.icons8.com/android/24/000000/twitter.png";

  ngOnInit(): void {
  }

  onClick() {
    console.log("Click");
  }
}
