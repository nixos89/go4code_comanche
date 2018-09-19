/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JwtUtilsService } from './jwt-utils.service';

describe('Service: JwtUtils', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JwtUtilsService]
    });
  });

  it('should ...', inject([JwtUtilsService], (service: JwtUtilsService) => {
    expect(service).toBeTruthy();
  }));
});
