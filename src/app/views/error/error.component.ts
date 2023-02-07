import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  error;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.error = this.activatedRoute.snapshot.queryParams?.error;
  }
}
