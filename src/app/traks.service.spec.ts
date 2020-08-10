import { TestBed } from '@angular/core/testing';

import { TraksService } from './traks.service';

describe('TraksService', () => {
  let service: TraksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
