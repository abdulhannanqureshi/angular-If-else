import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewForLoopComponent } from './new-for-loop.component';

describe('NewForLoopComponent', () => {
  let component: NewForLoopComponent;
  let fixture: ComponentFixture<NewForLoopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewForLoopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewForLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
