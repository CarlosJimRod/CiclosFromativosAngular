import { TestBed } from '@angular/core/testing';

import { CicloFormativoService } from './ciclo-formativo.service';

describe('CicloFormativoService', () => {
  let service: CicloFormativoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CicloFormativoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
