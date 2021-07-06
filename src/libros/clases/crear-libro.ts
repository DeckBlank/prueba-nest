import { IsNotEmpty, Length } from 'class-validator';

export class Libro {
  @IsNotEmpty()
  @Length(3, 20)
  readonly titulo: string;
  @IsNotEmpty()
  readonly autor: string;
  readonly id: string;
  readonly description: string;
}
