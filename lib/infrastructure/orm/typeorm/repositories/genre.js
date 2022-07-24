import CommonRepository from './common';
import GenreSchema from '../schemas/genre';
import { getRepository } from 'typeorm';

class GenreRepository extends CommonRepository {
  constructor() {
    super(GenreSchema);
    this.conn = getRepository(GenreSchema);
  }

}

export default GenreRepository;
