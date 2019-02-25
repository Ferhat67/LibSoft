import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HideableButtonAWComponent } from './hideable-button-aw.component';

describe('HideableButtonAWComponent', () => {
  let component: HideableButtonAWComponent;
  let fixture: ComponentFixture<HideableButtonAWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HideableButtonAWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HideableButtonAWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
