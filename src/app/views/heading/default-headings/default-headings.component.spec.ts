import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultHeadingsComponent } from './default-headings.component';

describe('DefaultHeadingsComponent', () => {
  let component: DefaultHeadingsComponent;
  let fixture: ComponentFixture<DefaultHeadingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultHeadingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultHeadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
