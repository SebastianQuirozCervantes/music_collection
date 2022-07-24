import CommonRepository from './common';
import AlbumSchema from '../schemas/album';
import { getRepository } from 'typeorm';

class AlbumRepository extends CommonRepository {
  constructor() {
    super(AlbumSchema);
    this.conn = getRepository(AlbumSchema);
  }

}

export default AlbumRepository;
