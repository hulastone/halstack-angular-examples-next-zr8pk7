import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  paginationActions: Array<string> = ["prev", "next", "first", "last"];
  page: number = 1;
  totalItems: number = 27;
  itemsPerPage: number = 10;

  navigate(page: number, operation: string) {
    this.page = page;
    console.log("navigate: " + operation);
  }

}
