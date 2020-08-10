import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BockEntryEditComponent } from './bock-entry-edit.component';

describe('BockEntryEditComponent', () => {
  let component: BockEntryEditComponent;
  let fixture: ComponentFixture<BockEntryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BockEntryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BockEntryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
