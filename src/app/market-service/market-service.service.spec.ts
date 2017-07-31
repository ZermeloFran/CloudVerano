import { TestBed, inject } from '@angular/core/testing';

import { MarketServiceService } from './market-service.service';

describe('MarketServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarketServiceService]
    });
  });

  it('should be created', inject([MarketServiceService], (service: MarketServiceService) => {
    expect(service).toBeTruthy();
  }));
});
