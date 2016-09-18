/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VkontakteService } from './vkontakte.service';

describe('Service: Vkontakte', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VkontakteService]
    });
  });

  it('should ...', inject([VkontakteService], (service: VkontakteService) => {
    expect(service).toBeTruthy();
  }));
});
