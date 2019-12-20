import { TestBed } from '@angular/core/testing';

import { LastfmtospotyService } from './lastfmtospoty.service';

describe('LastfmtospotyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LastfmtospotyService = TestBed.get(LastfmtospotyService);
    expect(service).toBeTruthy();
  });
});
