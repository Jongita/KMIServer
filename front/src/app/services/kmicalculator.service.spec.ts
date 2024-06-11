import { TestBed } from '@angular/core/testing';

import { kmicalculatorService } from './kmicalculator.service';

describe('KmicalculatorService', () => {
  let service: kmicalculatorService

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(kmicalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
