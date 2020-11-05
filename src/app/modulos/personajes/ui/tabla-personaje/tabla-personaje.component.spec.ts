import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPersonajeComponent } from './tabla-personaje.component';

describe('TablaPersonajeComponent', () => {
  let component: TablaPersonajeComponent;
  let fixture: ComponentFixture<TablaPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPersonajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
