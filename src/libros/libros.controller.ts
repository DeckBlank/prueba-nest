import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Libro } from './clases/crear-libro';
import { LibrosService } from './libros.service';
import { LibroI } from '../libros/interface/libro.interface';

@Controller('libros')
export class LibrosController {
  constructor(private readonly libroService: LibrosService) {}

  @Get()
  getAllLibros(): Promise<LibroI[]> {
    return this.libroService.buscarTodos();
  }

  @Get(':id')
  getLibro(@Param('id') idLibro: string): Promise<LibroI> {
    return this.libroService.buscarLibroId(idLibro);
  }

  @Post()
  @UsePipes(ValidationPipe)
  crearLibros(@Body() libro: Libro): Promise<LibroI> {
    return this.libroService.crearLibro(libro);
  }

  @Put(':id')
  modificarLibro(
    @Param('id') idLibro: string,
    @Body() libro: Libro,
  ): Promise<LibroI> {
    return this.libroService.modificarLibro(idLibro, libro);
  }

  @Delete(':id')
  borrarLibro(@Param('id') idLibro: string): Promise<LibroI> {
    return this.libroService.borrarLibro(idLibro);
  }
}
