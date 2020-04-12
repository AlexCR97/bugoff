import { TestBed } from '@angular/core/testing';

import { HistorialPruebasService } from './historial-pruebas.service';

describe('HistorialPruebasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HistorialPruebasService = TestBed.get(HistorialPruebasService);
    expect(service).toBeTruthy();
  });
});
