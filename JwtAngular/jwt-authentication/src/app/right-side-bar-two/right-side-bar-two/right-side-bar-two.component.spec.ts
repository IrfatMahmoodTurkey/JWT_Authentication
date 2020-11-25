import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideBarTwoComponent } from './right-side-bar-two.component';

describe('RightSideBarTwoComponent', () => {
  let component: RightSideBarTwoComponent;
  let fixture: ComponentFixture<RightSideBarTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightSideBarTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSideBarTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
