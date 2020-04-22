import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostManagementComponent } from './post-management.component';

describe('PostManagementComponent', () => {
  let component: PostManagementComponent;
  let fixture: ComponentFixture<PostManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
