import { Component, OnInit } from '@angular/core';
import { PersonajeService } from '../../services/personaje.service';
import { PersonajesModelo } from '../../model/personajes.model';
import { Observable, of } from 'rxjs';
import { map, filter, tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.scss']
})
export class PersonajeComponent implements OnInit {


  constructor(public personajeService: PersonajeService) { }

  ngOnInit(): void {
  }

  public onDatosPersonajes(cuerpoPersonaje: PersonajesModelo): void {
    this.personajeService.guardarPersonaje(cuerpoPersonaje);
  }
}
