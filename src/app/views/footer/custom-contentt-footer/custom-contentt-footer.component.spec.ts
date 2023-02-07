import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomContenttFooterComponent } from './custom-contentt-footer.component';

describe('CustomContenttFooterComponent', () => {
  let component: CustomContenttFooterComponent;
  let fixture: ComponentFixture<CustomContenttFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomContenttFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomContenttFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
