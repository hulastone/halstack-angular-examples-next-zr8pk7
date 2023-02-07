import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './basic-toggle-group.component.html',
  styleUrls: ['./basic-toggle-group.component.scss'],
})
export class BasicToggleGroupComponent implements OnInit {
  options = [
    {
      label: 'Facebook',
      value: 1,
    },
    {
      label: 'Twitter',
      value: 2,
    },
    {
      label: 'Linkedin',
      value: 3,
    },
    {
      label: 'Facebook',
      value: 4,
    },
    {
      label: 'Twitter',
      value: 5,
    },
    {
      label: 'Linkedin',
      value: 6,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
