import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetalleTreeComponent } from './modal-detalle-tree.component';

describe('ModalDetalleTreeComponent', () => {
  let component: ModalDetalleTreeComponent;
  let fixture: ComponentFixture<ModalDetalleTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDetalleTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDetalleTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
