import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultChipComponent } from './default-chip.component';

describe('DefaultChipComponent', () => {
  let component: DefaultChipComponent;
  let fixture: ComponentFixture<DefaultChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
