import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreePartsComponent } from './tree-parts.component';

describe('TreePartsComponent', () => {
  let component: TreePartsComponent;
  let fixture: ComponentFixture<TreePartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreePartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
