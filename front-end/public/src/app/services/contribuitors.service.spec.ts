import { TestBed } from '@angular/core/testing';

import { ContribuitorsService } from './contribuitors.service';

describe('ContribuitorsService', () => {
  let service: ContribuitorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContribuitorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
