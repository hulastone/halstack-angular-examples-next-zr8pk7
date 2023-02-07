import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipWithIconsComponent } from './chip-with-icons.component';

describe('ChipWithIconsComponent', () => {
  let component: ChipWithIconsComponent;
  let fixture: ComponentFixture<ChipWithIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipWithIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipWithIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
