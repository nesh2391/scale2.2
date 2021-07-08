import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmFooterComponent } from './um-footer.component';

describe('UmFooterComponent', () => {
  let component: UmFooterComponent;
  let fixture: ComponentFixture<UmFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UmFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
