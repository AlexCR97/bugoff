import { TestBed } from '@angular/core/testing';

import { ProyectosService } from './proyectos.service';

describe('ProyectosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProyectosService = TestBed.get(ProyectosService);
    expect(service).toBeTruthy();
  });
});
