import { TestBed } from '@angular/core/testing';

import { Alertify } from './alertify';

describe('Alertify', () => {
  let service: Alertify;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Alertify);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
