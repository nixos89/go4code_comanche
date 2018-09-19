/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CanActivateAuthGuardService } from './can-activate-auth-guard.service';

describe('Service: CanActivateAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateAuthGuardService]
    });
  });

  it('should ...', inject([CanActivateAuthGuardService], (service: CanActivateAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
