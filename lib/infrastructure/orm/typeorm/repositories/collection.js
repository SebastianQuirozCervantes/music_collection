import CommonRepository from './common';
import CollectionSchema from '../schemas/collection';
import { getRepository } from 'typeorm';

class AuthorRepository extends CommonRepository {
  constructor() {
    super(CollectionSchema);
    this.conn = getRepository(CollectionSchema);
  }

  async getSongsByCollectionId(query, idCollection){
    const page = query?.pagina || 1;
    const pageSize = query?.pageSize || 20;
    let builder = this.conn
    .createQueryBuilder('collection')
    .select([
        'collection',
        'collection_songs',
        'song'
    ])
    .leftJoin('collection.collection_songs',
      'collection_songs')
    .leftJoin('collection_songs.song',
      'song')
    .where('collection.id_collection  = :id',
        { id: idCollection })
    .skip((page - 1) * pageSize)
    .take(pageSize)
    .cache(true);

    return await builder.getManyAndCount();
  }
}

export default AuthorRepository;
