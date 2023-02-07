import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncontrolledInputTextComponent } from './uncontrolled-input-text.component';

describe('UncontrolledInputTextComponent', () => {
  let component: UncontrolledInputTextComponent;
  let fixture: ComponentFixture<UncontrolledInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UncontrolledInputTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UncontrolledInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
