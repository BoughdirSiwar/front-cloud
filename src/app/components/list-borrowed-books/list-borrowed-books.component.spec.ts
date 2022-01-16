import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBorrowedBooksComponent } from './list-borrowed-books.component';

describe('ListBorrowedBooksComponent', () => {
  let component: ListBorrowedBooksComponent;
  let fixture: ComponentFixture<ListBorrowedBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBorrowedBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBorrowedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
