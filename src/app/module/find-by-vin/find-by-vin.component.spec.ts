import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByVinComponent } from './find-by-vin.component';

describe('FindByVinComponent', () => {
  let component: FindByVinComponent;
  let fixture: ComponentFixture<FindByVinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindByVinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindByVinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
