import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraksComponent } from './traks.component';

describe('TraksComponent', () => {
  let component: TraksComponent;
  let fixture: ComponentFixture<TraksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
