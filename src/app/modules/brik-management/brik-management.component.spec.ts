import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrikManagementComponent } from './brik-management.component';

describe('BrikManagementComponent', () => {
  let component: BrikManagementComponent;
  let fixture: ComponentFixture<BrikManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrikManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrikManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
