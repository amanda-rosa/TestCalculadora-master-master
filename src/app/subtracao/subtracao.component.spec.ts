import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtracaoComponent } from './subtracao.component';

describe('SubtracaoComponent', () => {
  let component: SubtracaoComponent;
  let fixture: ComponentFixture<SubtracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtracaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('método de subtração', () => {
    const resultado = component.subtracao(9, 4, 2)
      expect(resultado).toBe(3);
  });

  it('método para subtrair', () => {
    const result = component.subtracao2(8, 3)
      expect(result).toBe(5);
  })
});
