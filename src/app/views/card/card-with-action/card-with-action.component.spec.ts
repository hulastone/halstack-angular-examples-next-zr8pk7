import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWithActionComponent } from './card-with-action.component';

describe('CardWithActionComponent', () => {
  let component: CardWithActionComponent;
  let fixture: ComponentFixture<CardWithActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardWithActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWithActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
