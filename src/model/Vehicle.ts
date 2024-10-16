// src/models/Vehicle.ts

export interface IVehicle {
    id?: string;  // El id es opcional al crear
    marca: string;
    modelo: string;
    año: number;
    precio: number;
}
