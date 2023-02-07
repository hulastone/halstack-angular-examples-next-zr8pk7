import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './default-tabbed-section.component.html',
  styleUrls: ['./default-tabbed-section.component.scss']
})
export class DefaultTabbedSectionComponent implements OnInit {
  sections: Array<any>;

  constructor() {
    this.sections = new Array<any>();
   }

  ngOnInit(): void {
    this.sections.push(
      { id: 0, label: "SECTION 1", selector: "section1-selector" },
      { id: 1, label: "SECTION 2", selector: "section2-selector" },
      { id: 2, label: "SECTION 3", selector: "section3-selector" }
    );
  }

}
