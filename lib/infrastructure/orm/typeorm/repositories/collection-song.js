import CommonRepository from './common';
import CollectionSongSchema from '../schemas/collection-songs';
import { getRepository } from 'typeorm';

class CollectionSongRepository extends CommonRepository {
  constructor() {
    super(CollectionSongSchema);
    this.conn = getRepository(CollectionSongSchema);
  }
}

export default CollectionSongRepository;
