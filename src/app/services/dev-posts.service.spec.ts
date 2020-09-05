import { TestBed } from '@angular/core/testing';

import { DevPostsService } from './dev-posts.service';

describe('DevPostsService', () => {
  let service: DevPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
