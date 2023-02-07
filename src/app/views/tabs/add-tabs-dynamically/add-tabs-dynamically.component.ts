import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface TabContent {
  id: string;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './add-tabs-dynamically.component.html',
  styleUrls: ['./add-tabs-dynamically.component.scss'],
})
export class AddTabsDynamicallyComponent implements OnInit {
  tabsContent: Array<TabContent> = [];

  tabs = new BehaviorSubject<Array<TabContent>>([]);

  constructor() {
    this.tabsContent.push({ id: 'id1', content: 'content1' });
    this.tabsContent.push({ id: 'id2', content: 'content2' });
    this.tabsContent.push({ id: 'id3', content: 'content3' });
  }

  ngOnInit(): void {
    this.tabs.next(this.tabsContent);
    console.log(this.tabsContent);
  }

  tabClicked(event) {
    console.log(event);
  }

  addMoreTabs() {
    this.tabsContent.push({
      id: `Id ${this.tabsContent.length + 1}`,
      content: `content${this.tabsContent.length + 1}`,
    });
    this.tabs.next(this.tabsContent);
  }
}
