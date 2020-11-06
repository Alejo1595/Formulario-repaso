import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CatalogoModelo } from '../models/catalogo.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor(private http: HttpClient) { }

  public obtenerCatalogo(nombreCatalogo: string): Observable<CatalogoModelo> {
    return this.http.get<CatalogoModelo>(`${environment.apiURL}/catalogo/${nombreCatalogo}`);
  }
}
