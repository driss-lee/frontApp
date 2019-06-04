import { TestBed } from '@angular/core/testing';

import { Forms.ServiceService } from './forms.service.service';

describe('Forms.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Forms.ServiceService = TestBed.get(Forms.ServiceService);
    expect(service).toBeTruthy();
  });
});
