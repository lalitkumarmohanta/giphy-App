import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpyHomeComponent } from './gpy-home.component';

describe('GpyHomeComponent', () => {
  let component: GpyHomeComponent;
  let fixture: ComponentFixture<GpyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
