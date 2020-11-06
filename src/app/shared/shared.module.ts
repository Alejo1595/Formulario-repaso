import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenedorComponent } from './components/contenedor/contenedor.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ContenedorComponent],
  exports: [ContenedorComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
