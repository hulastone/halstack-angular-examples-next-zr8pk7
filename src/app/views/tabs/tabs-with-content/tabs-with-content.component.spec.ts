import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsWithContentComponent } from './tabs-with-content.component';

describe('TabsWithContentComponent', () => {
  let component: TabsWithContentComponent;
  let fixture: ComponentFixture<TabsWithContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsWithContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsWithContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
