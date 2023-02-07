import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './disabled-toggle-group.component.html',
  styleUrls: ['./disabled-toggle-group.component.scss'],
})
export class DisabledToggleGroupComponent implements OnInit {
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
