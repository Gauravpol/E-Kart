import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsBooksComponent } from './sports-books.component';

describe('SportsBooksComponent', () => {
  let component: SportsBooksComponent;
  let fixture: ComponentFixture<SportsBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportsBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
