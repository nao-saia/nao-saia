import { ContributorsService } from './contributors.service';
import { TestBed } from '@angular/core/testing';

describe('ContributorsService', () => {
  let service: ContributorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContributorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
