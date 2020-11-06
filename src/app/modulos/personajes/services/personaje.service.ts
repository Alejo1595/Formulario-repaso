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

  public listaImagenes: CatalogoModelo[] = [
    { id: 1, codigo: '1', descripcion: 'Aquaman', ruta: 'assets/images/aquaman.png' },
    { id: 2, codigo: '2', descripcion: 'Batman', ruta: 'assets/images/batman.png' },
    { id: 3, codigo: '3', descripcion: 'Daredevil', ruta: 'assets/images/daredevil.png' },
    { id: 4, codigo: '4', descripcion: 'Hulk', ruta: 'assets/images/hulk.png' },
    { id: 5, codigo: '5', descripcion: 'Linterna Verde', ruta: 'assets/images/linterna-verde.png' },
    { id: 6, codigo: '6', descripcion: 'Spiderman', ruta: 'assets/images/spiderman.png' },
    { id: 7, codigo: '7', descripcion: 'Wolverine', ruta: 'assets/images/wolverine.png' },
  ];

  constructor(private http: HttpClient) { }


  public guardarPersonaje(cuerpoPersonaje: PersonajesModelo): void {
    console.log(cuerpoPersonaje);
    // this.http.post()
  }
}

