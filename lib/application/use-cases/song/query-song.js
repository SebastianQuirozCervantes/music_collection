import messages from '../support/messages.json';
import messages_en from '../support/messages_en.json';
import { ForbiddenError } from '../../../infrastructure/helpers/errors';
import Song from '../../domain/song';

const message = messages.song;
const message_en = messages_en.song;

class QuerySong {
    constructor({ songRepository,
      genreRepository,
      albumRepository }) {
      this.songRepository = songRepository;
      this.genreRepository = genreRepository;
      this.albumRepository = albumRepository;
    }
  
    async getSongsByQuery(query, language) {
      const mess = language && language === 'en' ? message_en : message;
      
      const songs = await this.songRepository.getSongsByQuery(query);
      
      if(songs.length === 0 || !songs){
        throw new ForbiddenError(mess.no_song,
            'song',
            'incorrect');
      }

      return songs;
    }

    async updateSong(idSong, newData, language) {
      const mess = language && language === 'en' ? message_en : message;
      const song = await this.songRepository.findOne({
        where : {id_song: idSong}
      })

      if(!song){
        throw new ForbiddenError(mess.no_song,
          'song',
          'incorrect');
      }
      const genre = await this.genreRepository.findOne({
        where: {id_genre: newData.genre}
      })

      if(!genre){
        throw new ForbiddenError(mess.no_exist_genre,
          'song',
          'incorrect');
      }

      const album = await this.albumRepository.findOne({
        where: {id_album: newData.album}
      })

      if(!album){
        throw new ForbiddenError(mess.no_exist_album,
          'song',
          'incorrect');
      }

      this.song = new Song({
        language,
        ...newData,
      });
      
      return await this.songRepository.update({id_song: idSong},this.song);
    }
  
  }
  
  export default QuerySong;
  