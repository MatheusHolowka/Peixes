import { TestBed } from '@angular/core/testing';

import { Launches } from './launches';

describe('Launches', () => {
  let service: Launches;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Launches);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
