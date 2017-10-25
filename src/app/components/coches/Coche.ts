export class Coche {

  public nombre: string;
  public marca: string;
  public modelo: string;
  public color: string;

  constructor(
    nombre?: string,
    marca?: string,
    modelo?: string,
    color?: string
  ){
    this.nombre = nombre;
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
  }

}
 