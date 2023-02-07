import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreffixNumberComponent } from './preffix-number.component';

describe('PreffixNumberComponent', () => {
  let component: PreffixNumberComponent;
  let fixture: ComponentFixture<PreffixNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreffixNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreffixNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
