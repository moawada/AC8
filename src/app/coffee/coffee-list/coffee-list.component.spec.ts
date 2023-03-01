import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { CoffeeRoutingModule } from '../coffee-routing.module';

import { CoffeeListComponent } from './coffee-list.component';


describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeListComponent ],
      imports: [
        BrowserAnimationsModule,
        CoffeeRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        MatSidenavModule,
      ],

      providers: [provideMockStore({})],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
