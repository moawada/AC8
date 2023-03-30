import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { CoffeeDetailsComponent } from './coffee-details.component';

describe('CoffeeDetailsComponent', () => {
  let component: CoffeeDetailsComponent;
  let fixture: ComponentFixture<CoffeeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      providers: [
        provideMockStore({}),
      ],
      declarations: [ CoffeeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
