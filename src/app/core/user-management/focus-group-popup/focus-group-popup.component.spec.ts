import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusGroupPopupComponent } from './focus-group-popup.component';

describe('FocusGroupPopupComponent', () => {
  let component: FocusGroupPopupComponent;
  let fixture: ComponentFixture<FocusGroupPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FocusGroupPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusGroupPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
