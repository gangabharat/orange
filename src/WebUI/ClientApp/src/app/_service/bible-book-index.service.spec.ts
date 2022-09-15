import { TestBed } from '@angular/core/testing';

import { BibleBookIndexService } from './bible-book-index.service';

describe('BibleBookIndexService', () => {
  let service: BibleBookIndexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BibleBookIndexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
