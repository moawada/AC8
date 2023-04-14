import { TestBed, inject } from '@angular/core/testing';
import { BasicAuthenticationService } from './basic-authentication.service';


describe('Service: SharedData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasicAuthenticationService]
    });
  });

  it('should ...', inject([BasicAuthenticationService], (service: BasicAuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
