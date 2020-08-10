import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneBoocksComponent } from './phone-boocks.component';

describe('PhoneBoocksComponent', () => {
  let component: PhoneBoocksComponent;
  let fixture: ComponentFixture<PhoneBoocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneBoocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneBoocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
