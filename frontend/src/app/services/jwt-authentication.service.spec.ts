import { TestBed, inject } from '@angular/core/testing';
import { JwtAuthenticationService } from './jwt-authentication.service';


describe('Service: SharedData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JwtAuthenticationService]
    });
  });

  it('should ...', inject([JwtAuthenticationService], (service: JwtAuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
