import CommonRepository from './common';
import SongSchema from '../schemas/songs';
import { getConnection } from 'typeorm';

class SongRepository extends CommonRepository {
  constructor() {
    super(SongSchema);
  }

  async getSongsByQuery(query){
    const page = query?.pagina || 1;
    const pageSize = query?.pageSize || 20;
    let authorParam = !query.author && !query.song ? '' : query.author;
    let songParam = !query.song && !query.author ? '' : query.song;
    let builder = getConnection()
    .createQueryBuilder()
    .select([
        'song',
        'author_song',
        'author'
    ])
    .from('song',
    'song')
    .leftJoin('song.author_song',
      'author_song')
    .leftJoin('author_song.author',
      'author')
    .where('song.name  like :name',
        { name: `%${songParam}%` })
    .orWhere('author.name like :authorName',
    {authorName: `%${authorParam}%`})
    .skip((page - 1) * pageSize)
    .take(pageSize)
    .cache(true);

    return await builder.getManyAndCount();
  }
}

export default SongRepository;
