import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // Marca la clase como una entidad de base de datos
export class User {
  @PrimaryGeneratedColumn('uuid') // Genera automáticamente un UUID como clave primaria
  _id: string;

  @Column({ unique: true }) // Define la columna y establece que el email debe ser único
  email: string;

  @Column()
  password: string;

  @Column()
  nombre: string;

  @Column()
  apellido: string;
}
