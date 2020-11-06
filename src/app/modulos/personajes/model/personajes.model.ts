export interface PersonajesModelo {
    id?: string;
    nombreSuperHeroe: string;
    nombrePersonaje: string;
    fechaPrimeraAparicion: Date;
    ciudadOrigen: string;
    biografia: string;
    imagen: string;
    editorial: string;
    tipoPersonaje: string;
}

export interface CatalogoModelo {
    id: number;
    codigo: string;
    descripcion: string;
    ruta?: string;
}

