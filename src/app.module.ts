import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibrosController } from './libros/libros.controller';
import { LibrosService } from './libros/libros.service';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { LibrosSchema } from './libros/schemas/libros.schema';

dotenv.config();

const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${encodeURIComponent(
  process.env.MONGO_PSW,
)}@cluster0.6bf5k.mongodb.net/test?retryWrites=true`;

@Module({
  imports: [
    MongooseModule.forRoot(uri),
    MongooseModule.forFeature([{ name: 'Libro', schema: LibrosSchema }]),
  ],
  controllers: [AppController, LibrosController],
  providers: [AppService, LibrosService],
})
export class AppModule {}
