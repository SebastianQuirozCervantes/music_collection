import messages from '../support/messages.json';
import messages_en from '../support/messages_en.json';
import { ForbiddenError,UnauthorizedError } from '../../../infrastructure/helpers/errors';

const message = messages.collection;
const message_en = messages_en.collection;

class QueryCollection {
    constructor({ collectionRepository, collectionSongRepository }) {
      this.collectionRepository = collectionRepository;
      this.collectionSongRepository = collectionSongRepository;
    }
  
    async getSongsByCollectionId(user,params,idCollection, language) {
      const mess = language && language === 'en' ? message_en : message;
      const collection = await this.collectionRepository.findOne({
        where: {id_collection: idCollection},
      });

      if(!collection){
        throw new ForbiddenError(mess.no_collection,
            'collection',
            'incorrect');
      }

      const userExist = await this.collectionRepository.findOne({
        where: {id_collection: idCollection, user : user.id_user}
      })

      if(!userExist){
        throw new UnauthorizedError(mess.no_authorization_collection,
            'collection',
            'incorrect')
      }

      return await this.collectionRepository.getSongsByCollectionId(params,idCollection);
    }

    async insertSongInCollection(httpRequest, language){
      const {params, user, body} = httpRequest
      const mess = language && language === 'en' ? message_en : message;

      if(!body.song){
        throw new ForbiddenError(mess.required_params,
            'collection',
            'incorrect');
      }

      const collection = await this.collectionRepository.findOne({
        where: {id_collection: params.id},
      });

      if(!collection){
        throw new ForbiddenError(mess.no_collection,
            'collection',
            'incorrect');
      }

      const userExist = await this.collectionRepository.findOne({
        where: {id_collection: params.id, user : user.id_user}
      })

      if(!userExist){
        throw new UnauthorizedError(mess.no_authorization_collection,
            'collection',
            'incorrect')
      }

      const songExist = await this.collectionSongRepository.findOne({
        where: {song: body.song, collection: params.id}
      })

      if(songExist){
        throw new ForbiddenError(mess.song_exist,
            'collection',
            'incorrect');
      }

      return this.collectionSongRepository.save({
        song: body.song,
        collection: params.id
      })
    }
  
  }
  
  export default QueryCollection;
  