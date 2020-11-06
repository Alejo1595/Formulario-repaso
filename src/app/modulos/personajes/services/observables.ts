/*
    Partes de un observable
    next: elementos que se van a emitir
    error: captura los errores
    complete: cuando el observable deja de emitir valores
*/

import { Observable, of } from "rxjs";

const obs$ = of<number>(1, 2, 3, 4, 5, 6);

obs$.subscribe();



