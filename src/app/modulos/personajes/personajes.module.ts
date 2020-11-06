import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PersonajesRoutingModule } from './personajes-routing.module';

import { PersonajeComponent } from './components/personaje/personaje.component';
import { FormularioPersonajeComponent } from './ui/formulario-personaje/formulario-personaje.component';
import { TablaPersonajeComponent } from './ui/tabla-personaje/tabla-personaje.component';

import { PersonajeService } from './services/personaje.service';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

// Flexlayout
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    PersonajeComponent,
    FormularioPersonajeComponent,
    TablaPersonajeComponent
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule,
    MatAutocompleteModule,
    FlexLayoutModule,
    SharedModule
  ],
  providers: [PersonajeService]
})
export class PersonajesModule { }
