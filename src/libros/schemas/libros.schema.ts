import * as mongoose from 'mongoose';

export const LibrosSchema = new mongoose.Schema({
  titulo: String,
  autor: String,
  descripcion: String,
});
