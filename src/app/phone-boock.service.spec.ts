import { TestBed } from '@angular/core/testing';

import { PhoneBoockService } from './phone-boock.service';

describe('PhoneBoockService', () => {
  let service: PhoneBoockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneBoockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
