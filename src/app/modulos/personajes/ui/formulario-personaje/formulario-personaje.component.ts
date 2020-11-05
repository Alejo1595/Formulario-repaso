import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-personaje',
  templateUrl: './formulario-personaje.component.html',
  styleUrls: ['./formulario-personaje.component.scss']
})
export class FormularioPersonajeComponent implements OnInit {

  @ViewChild('formu', { static: false }) formu: NgForm;

  public formulario: FormGroup;
  public validaciones;

  public tipoPersonaje = [
    { id: 1, descripcion: 'Heroe' },
    { id: 2, descripcion: 'Villano' },
    { id: 3, descripcion: 'Anti-heroe' },
  ];

  public editoriales = [
    { id: 1, descripcion: 'Marvel' },
    { id: 2, descripcion: 'DC' },
  ];
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
    console.log(this.formulario.value);
  }

  public limpiarFormulario(): void {
    // this.formulario.reset();
    this.formu.resetForm();
  }

  private crearFormulario(): void {
    this.formulario = this.formBuilder.group({
      nombrePersonaje: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      ciudadDeOrigen: [null, Validators.required],
      tipoPersonaje: [null, Validators.required],
      editorial: [null, Validators.required],
      biografia: [null, Validators.required]
    });
  }

  private crearValidaciones(): void {
    this.validaciones = {
      nombrePersonaje: [
        { tipo: 'required', mensaje: 'Campo obligatorio' },
        { tipo: 'minlength', mensaje: 'minimo 5 caracteres' },
        { tipo: 'maxlength', mensaje: 'maximo 10 caracteres' },
      ],
      ciudadDeOrigen: [{ tipo: 'required', mensaje: 'Campo obligatorio' }],
      tipoPersonaje: [{ tipo: 'required', mensaje: 'Campo obligatorio' }],
      editorial: [{ tipo: 'required', mensaje: 'Campo obligatorio' }],
      biografia: [{ tipo: 'required', mensaje: 'Campo obligatorio' }],
    };
  }
}
