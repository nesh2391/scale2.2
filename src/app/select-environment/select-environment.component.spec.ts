import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEnvironmentComponent } from './select-environment.component';

describe('SelectEnvironmentComponent', () => {
  let component: SelectEnvironmentComponent;
  let fixture: ComponentFixture<SelectEnvironmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectEnvironmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
