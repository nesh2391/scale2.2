import { TestBed } from '@angular/core/testing';

import { UserAndEnvironmentService } from './user-and-environment.service';

describe('UserAndEnvironmentService', () => {
  let service: UserAndEnvironmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAndEnvironmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
