import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CatalogoModelo, PersonajesModelo } from '../model/personajes.model';

@Injectable()
export class PersonajeService {

  public tiposDePersonajes: CatalogoModelo[] = [
    { id: 1, codigo: '1', descripcion: 'Heroe' },
    { id: 2, codigo: '2', descripcion: 'Villano' },
    { id: 3, codigo: '3', descripcion: 'Anti-heroe' },
  ];

  public listaEditoriales: CatalogoModelo[] = [
    { id: 1, codigo: '1', descripcion: 'Marvel' },
    { id: 2, codigo: '2', descripcion: 'DC' },
  ];

  constructor(private http: HttpClient) { }


  public guardarPersonaje(cuerpoPersonaje: PersonajesModelo): void {
    console.log(cuerpoPersonaje);
    // this.http.post()
  }
}

