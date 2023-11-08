import { TestBed } from '@angular/core/testing';

import { NationalParksService } from './national-parks.service';

describe('NationalParksService', () => {
  let service: NationalParksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NationalParksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
