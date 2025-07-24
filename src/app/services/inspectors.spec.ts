import { TestBed } from '@angular/core/testing';

import { Inspectors } from './inspectors';

describe('Inspectors', () => {
  let service: Inspectors;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Inspectors);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
