import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomaComponent } from './soma.component';

describe('SomaComponent', () => {
  let component: SomaComponent;
  let fixture: ComponentFixture<SomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('método de adição', () => {
    const resultado = component.soma(8, 9, 4)
      expect(resultado).toBe(21);
  });

  it('método para somar', () => {
    const result = component.soma2(6, 5)
      expect(result).toBe(11);
  });
});
