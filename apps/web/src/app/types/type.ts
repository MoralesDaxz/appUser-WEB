type Users = {
  id: string,
  nombre?: string,
  apellido?: string,
  pais?: string,
  ciudad?: string,
  edad?: number,
  nie?: string,
}
type User = {
 
  nombre: string,
  apellido: string,
  pais: string,
  ciudad: string,
  edad: number,
  nie: string,
}

export type { Users,User }