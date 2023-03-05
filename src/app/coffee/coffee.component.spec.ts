import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { CoffeeDetailsComponent } from './coffee-details/coffee-details.component';
import { CoffeeRoutingModule } from './coffee-routing.module';

import { CoffeeComponent } from './coffee.component';


describe('CoffeeComponent', () => {
  let component: CoffeeComponent;
  let fixture: ComponentFixture<CoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({

      declarations: [
        CoffeeComponent,
        CoffeeDetailsComponent
      ],

      imports: [
        BrowserAnimationsModule,
        CoffeeRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        MatSidenavModule,
      ],

      providers: [
        provideMockStore({}),
        MatDrawer
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the matDrawer and set selectedCoffeeId', () => {
    const coffeeId = 123;
    spyOn(component.matDrawer, 'toggle');

    component.showSelectedCoffee(coffeeId);

    expect(component.selectedCoffeeId).toEqual(coffeeId);
    expect(component.matDrawer.toggle).toHaveBeenCalled();
  });
});
