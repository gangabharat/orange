import { TestBed } from '@angular/core/testing';

import { ManageHttpRequestService } from './manage-http-request.service';

describe('ManageHttpRequestService', () => {
  let service: ManageHttpRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageHttpRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
