import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { CatalogoModelo, PersonajesModelo } from '../../model/personajes.model';

@Component({
  selector: 'app-formulario-personaje',
  templateUrl: './formulario-personaje.component.html',
  styleUrls: ['./formulario-personaje.component.scss']
})
export class FormularioPersonajeComponent implements OnInit, OnDestroy {

  @Input() inTiposDePersonajes: CatalogoModelo[];
  @Input() inListaEditoriales: CatalogoModelo[];

  @Output() outDatosPersonajes = new EventEmitter<PersonajesModelo>();

  @ViewChild('formu', { static: false }) formu: NgForm;

  public formulario: FormGroup;
  public validaciones;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.crearFormulario();
    this.crearValidaciones();
  }

  public submitFormulario(): void {
    if (this.formulario.invalid) {
      console.log(this.formulario);
      return;
    }
    this.outDatosPersonajes.emit(this.formulario.value);
  }

  public limpiarFormulario(): void {
    // this.formulario.reset();
    this.formu.resetForm();
  }

  ngOnDestroy(): void {

  }

  private crearFormulario(): void {
    this.formulario = this.formBuilder.group({
      id: [null],
      nombreSuperHeroe: [null, Validators.required],
      nombrePersonaje: [null, Validators.required],
      fechaPrimeraAparicion: [null, Validators.required],
      ciudadOrigen: [null, Validators.required],
      editorial: [null, Validators.required],
      tipoPersonaje: [null, Validators.required],
      biografia: [null, Validators.required],
    });
  }

  private crearValidaciones(): void {
    this.validaciones = {
      nombreSuperHeroe: [{ tipo: 'required', mensaje: 'Campo obligatorio' }],
      nombrePersonaje: [{ tipo: 'required', mensaje: 'Campo obligatorio' }],
      fechaPrimeraAparicion: [{ tipo: 'required', mensaje: 'Campo obligatorio' }],
      ciudadOrigen: [{ tipo: 'required', mensaje: 'Campo obligatorio' }],
      biografia: [{ tipo: 'required', mensaje: 'Campo obligatorio' }],
      editorial: [{ tipo: 'required', mensaje: 'Campo obligatorio' }],
      tipoPersonaje: [{ tipo: 'required', mensaje: 'Campo obligatorio' }],
    };
  }
}
