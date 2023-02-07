import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultResultsetTableComponent } from './default-resultset-table.component';

describe('DefaultResultsetTableComponent', () => {
  let component: DefaultResultsetTableComponent;
  let fixture: ComponentFixture<DefaultResultsetTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultResultsetTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultResultsetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
