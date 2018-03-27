import { TestBed, inject } from '@angular/core/testing';

import { FacilityRatingService } from './facility-rating.service';

describe('FacilityRatingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacilityRatingService]
    });
  });

  it('should be created', inject([FacilityRatingService], (service: FacilityRatingService) => {
    expect(service).toBeTruthy();
  }));
});
