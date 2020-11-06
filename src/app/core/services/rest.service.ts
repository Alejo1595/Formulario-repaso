import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export class RestService {

  private actionUrl: string;

  constructor(protected http: HttpClient, protected url: string) {
    this.actionUrl = `${environment.apiURL}/${url}`;
  }

  public getAll<T>(objPaths?: any): Observable<T> {
    let point = '';
    if (objPaths) {
      const sub = this.objectToPaths(objPaths);
      point = `${this.actionUrl}/${sub}`;
    } else {
      point = `${this.actionUrl}`;
    }
    return this.http.get<T>(point);
  }

  public getSingle<T>(id: number | string): Observable<T> {
    return this.http.get<T>(`${this.actionUrl}/${id}`);
  }

  public get<T>(id: number | string, objPaths?: any): Observable<T> {
    let point = '';
    if (objPaths) {
      const sub = this.objectToPaths(objPaths);
      point = `${this.actionUrl}/${sub}/${id}`;
    } else {
      point = `${this.actionUrl}/${id}`;
    }
    return this.http.get<T>(point);
  }

  public getQueryParams<T>(params: string, objPaths?: any): Observable<T> {
    let point = '';
    if (objPaths) {
      const sub = this.objectToPaths(objPaths);
      point = `${this.actionUrl}/${sub}?${params}`;
    } else {
      point = `${this.actionUrl}?${params}`;
    }
    return this.http.get<T>(`${point}`);
  }

  public add<T>(item: T, objPaths?: any): Observable<T> {
    let point = '';
    if (objPaths) {
      const sub = this.objectToPaths(objPaths);
      point = `${this.actionUrl}/${sub}`;
    } else {
      point = `${this.actionUrl}`;
    }
    return this.http.post<T>(point, item);
  }

  public update<T>(id: number | string, itemToUpdate: any, objPaths?: any): Observable<T> {
    let point = '';
    if (objPaths) {
      const sub = this.objectToPaths(objPaths);
      point = `${this.actionUrl}/${sub}/${id}`;
    } else {
      point = `${this.actionUrl}/${id}`;
    }
    return this.http
      .put<T>(`${point}`, itemToUpdate);
  }

  public updateQueryParams<T>(params: string, itemToUpdate: any): Observable<T> {
    return this.http
      .put<T>(`${this.actionUrl}?${params}`, itemToUpdate);
  }

  public updateMultipleInBody<T>(itemToUpdate: any, objPaths: any = null, params: string = ''): Observable<T> {
    let point = '';
    if (objPaths) {
      const sub = this.objectToPaths(objPaths);
      point = `${this.actionUrl}/${sub}?${params}`;
    } else {
      point = `${this.actionUrl}?${params}`;
    }
    return this.http
      .put<T>(`${point}`, itemToUpdate);
  }

  public updateSinId<T>(itemToUpdate: any, objPaths?: any): Observable<T> {
    let point = '';
    if (objPaths) {
      const sub = this.objectToPaths(objPaths);
      point = `${this.actionUrl}/${sub}/`;
    } else {
      point = `${this.actionUrl}/`;
    }
    return this.http
      .put<T>(`${point}`, itemToUpdate);
  }

  public delete<T>(id: number | string): Observable<T> {
    return this.http.delete<T>(`${this.actionUrl}/${id}`);
  }

  public deleteQueryParams<T>(params: string): Observable<T> {
    return this.http.delete<T>(`${this.actionUrl}?${params}`);
  }

  public deleteByParam<T>(params: string): Observable<T> {
    return this.http.delete<T>(`${this.actionUrl}?${params}`);
  }

  public deleteByParams<T>(params: string, objPaths?: any): Observable<T> {
    let point = '';
    if (objPaths) {
      const sub = this.objectToPaths(objPaths);
      point = `${this.actionUrl}/${sub}?${params}`;
    } else {
      point = `${this.actionUrl}?${params}`;
    }
    return this.http.delete<T>(point);
  }

  public deleteByArrayBody<T>(params: string, body: any, objPaths?: any): Observable<T> {
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', }), body, };
    let point = '';
    if (objPaths) {
      const sub = this.objectToPaths(objPaths);
      point = `${this.actionUrl}/${sub}?${params}`;
    } else {
      point = `${this.actionUrl}?${params}`;
    }
    return this.http.delete<T>(point, options);
  }

  /*
    Transforma un objeto a rutas
    @param objPaths un objeto con claves valor
    @example
    objePaths = { ruta:null, val:1 } // La salida será: /ruta/val/1
  */
  private objectToPaths(objPaths: Map<string, string>): string {
    let path = '';
    const arrayPaths = Object.keys(objPaths);
    arrayPaths.forEach((key, i) => {
      const val = objPaths[key];
      path = val
        ? path + `${key}/${val}`
        : path + `${(arrayPaths.length - 1) !== i ? (key + '/') : (key)
        }`;
    });
    return path;
  }
}
