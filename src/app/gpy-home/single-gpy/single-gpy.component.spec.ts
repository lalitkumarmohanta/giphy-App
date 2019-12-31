import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleGpyComponent } from './single-gpy.component';

describe('SingleGpyComponent', () => {
  let component: SingleGpyComponent;
  let fixture: ComponentFixture<SingleGpyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleGpyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleGpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
