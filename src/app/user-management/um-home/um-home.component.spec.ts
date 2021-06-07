import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmHomeComponent } from './um-home.component';

describe('UmHomeComponent', () => {
  let component: UmHomeComponent;
  let fixture: ComponentFixture<UmHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UmHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
