import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CoffeeService } from './coffee.service';
import { ICoffeeInfo } from '../models/coffee.models';


describe('CoffeeService', () => {
  let service: CoffeeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [CoffeeService],
    });
    service = TestBed.inject(CoffeeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve coffee information', () => {
    const mockCoffeeInfo: ICoffeeInfo[] = [
      {
        id: 1,
        uid: '001',
        blend_name: 'Test 1',
        origin: 'Test Origin',
        variety: 'Test Variety',
        notes: 'Test Notes',
        intensifier: 'Test Intensifier',
      },
    ];

    service.getCoffee().subscribe((coffeeInfo) => {
      expect(coffeeInfo).toEqual(mockCoffeeInfo);
    });

    const req = httpMock.expectOne(service.coffeeAPI);
    expect(req.request.method).toEqual('GET');
    //responds with the mock coffee information when the expected request is received.
    req.flush(mockCoffeeInfo);
  });
});
