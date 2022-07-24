import messages from '../support/messages.json';
import messages_en from '../support/messages_en.json';
import { ForbiddenError,UnauthorizedError } from '../../../infrastructure/helpers/errors';

const message = messages.collection;
const message_en = messages_en.collection;

class QueryCollection {
    constructor({ collectionRepository }) {
      this.collectionRepository = collectionRepository;
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
  
  }
  
  export default QueryCollection;
  