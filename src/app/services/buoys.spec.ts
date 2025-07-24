import { TestBed } from '@angular/core/testing';

import { Buoys } from './buoys';

describe('Buoys', () => {
  let service: Buoys;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Buoys);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
