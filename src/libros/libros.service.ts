import { Injectable } from '@nestjs/common';
import { Libro } from '../libros/clases/crear-libro';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LibroI } from '../libros/interface/libro.interface';

@Injectable()
export class LibrosService {
  constructor(
    @InjectModel('Libro') private readonly libroModel: Model<LibroI>,
  ) {}

  async buscarTodos(): Promise<LibroI[]> {
    return await this.libroModel.find();
  }

  async buscarLibroId(id: string): Promise<LibroI> {
    return await this.libroModel.findOne({ _id: id });
  }

  async crearLibro(libro: Libro): Promise<LibroI> {
    const nuevoLibro = new this.libroModel(libro);

    return await nuevoLibro.save();
  }

  async modificarLibro(id: string, libro: Libro): Promise<LibroI> {
    return await this.libroModel.findByIdAndUpdate(id, libro, { new: true });
  }

  async borrarLibro(id: string): Promise<LibroI> {
    return await this.libroModel.findByIdAndRemove(id);
  }
}
