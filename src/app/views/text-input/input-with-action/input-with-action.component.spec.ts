import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithActionComponent } from './input-with-action.component';

describe('InputWithActionComponent', () => {
  let component: InputWithActionComponent;
  let fixture: ComponentFixture<InputWithActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputWithActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWithActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
