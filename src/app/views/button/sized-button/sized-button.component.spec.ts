import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizedButtonComponent } from './sized-button.component';

describe('SizedButtonComponent', () => {
  let component: SizedButtonComponent;
  let fixture: ComponentFixture<SizedButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizedButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SizedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
