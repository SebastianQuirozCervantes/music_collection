import CommonRepository from './common';
import AuthorSchema from '../schemas/author';
import { getConnection } from 'typeorm';

class AuthorRepository extends CommonRepository {
  constructor() {
    super(AuthorSchema);
  }

  async getSongsByAuthorId(query, idAuthor){
    const page = query?.pagina || 1;
    const pageSize = query?.pageSize || 20;
    let builder = getConnection()
    .createQueryBuilder()
    .select([
        'author',
        'author_song',
        'song'
    ])
    .from('author',
      'author')
    .leftJoin('author.author_song',
      'author_song')
    .leftJoin('author_song.song',
      'song')
    .where('author.id_author  = :id',
        { id: idAuthor })
    .skip((page - 1) * pageSize)
    .take(pageSize)
    .cache(true);

    return await builder.getManyAndCount();
  }
}

export default AuthorRepository;
