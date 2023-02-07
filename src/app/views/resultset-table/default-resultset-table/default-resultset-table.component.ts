import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './default-resultset-table.component.html',
  styleUrls: ['./default-resultset-table.component.scss']
})
export class DefaultResultsetTableComponent implements OnInit {

  constructor() { }

  data: Array<any> = [
    {
      id: "001",
      name: "Peter",
      city: "Miami",
      actions: true
    },
    {
      id: "002",
      name: "Louis",
      city: "London",
      actions: false
    },
    {
      id: "003",
      name: "Lana",
      city: "Amsterdam",
      actions: true
    },
    {
      id: "004",
      name: "Rick",
      city: "London",
      actions: true
    },
    {
      id: "005",
      name: "Mark",
      city: "Miami",
      actions: true
    },
    {
      id: "006",
      name: "Cris",
      city: "Paris",
      actions: false
    },
    {
      id: "007",
      name: "Kim",
      city: "Tokyo",
      actions: false
    },
    {
      id: "008",
      name: "Anna",
      city: "York",
      actions: false
    },
    {
      id: "009",
      name: "James",
      city: "Glasgow",
      actions: true
    }
  ];


  ngOnInit(): void {
  }

}
