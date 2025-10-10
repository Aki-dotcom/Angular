import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListObjects } from './list-objects';

describe('ListObjects', () => {
  let component: ListObjects;
  let fixture: ComponentFixture<ListObjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListObjects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListObjects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
