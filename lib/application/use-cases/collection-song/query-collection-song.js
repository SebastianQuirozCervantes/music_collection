import messages from '../support/messages.json';
import messages_en from '../support/messages_en.json';
import { ForbiddenError,UnauthorizedError } from '../../../infrastructure/helpers/errors';

const message = messages.collection;
const message_en = messages_en.collection;

class QueryCollectionSong {
    constructor({ collectionSongRepository, collectionRepository, songRepository }) {
      this.collectionSongRepository = collectionSongRepository;
      this.collectionRepository = collectionRepository;
      this.songRepository = songRepository;
    }
  
    async insertSongInCollection(httpRequest, language){
      const {user, body} = httpRequest
      const mess = language && language === 'en' ? message_en : message;

      if(!body.song || !body.collection){
        throw new ForbiddenError(mess.required_params,
            'collection',
            'incorrect');
      }
      const song = await this.songRepository.findOne({
        where:{id_song: body.song} 
      })
      if(!song){
        throw new ForbiddenError(mess.no_song,
            'collection',
            'incorrect');
      }
      const collection = await this.collectionRepository.findOne({
        where: {id_collection: body.collection},
      });

      if(!collection){
        throw new ForbiddenError(mess.no_collection,
            'collection',
            'incorrect');
      }

      const userExist = await this.collectionRepository.findOne({
        where: {id_collection: body.collection, user : user.id_user}
      })

      if(!userExist){
        throw new UnauthorizedError(mess.no_authorization_collection,
            'collection',
            'incorrect')
      }

      const songExist = await this.collectionSongRepository.findOne({
        where: {song: body.song, collection: body.collection}
      })

      if(songExist){
        throw new ForbiddenError(mess.song_exist,
            'collection',
            'incorrect');
      }

      return this.collectionSongRepository.save({
        song: body.song,
        collection: body.collection
      })
    }
  
  }
  
  export default QueryCollectionSong;
  