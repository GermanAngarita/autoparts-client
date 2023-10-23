import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeFullComponent } from './tree-full.component';

describe('TreeFullComponent', () => {
  let component: TreeFullComponent;
  let fixture: ComponentFixture<TreeFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeFullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
