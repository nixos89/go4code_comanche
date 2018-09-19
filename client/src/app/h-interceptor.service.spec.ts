import { TestBed, inject } from '@angular/core/testing';

import { HInterceptorService } from './h-interceptor.service';

describe('HInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HInterceptorService]
    });
  });

  it('should be created', inject([HInterceptorService], (service: HInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
