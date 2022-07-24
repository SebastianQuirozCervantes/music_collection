import messages from '../support/messages.json';
import messages_en from '../support/messages_en.json';
import { ForbiddenError } from '../../../infrastructure/helpers/errors';

const message = messages.author;
const message_en = messages_en.author;

class QueryAuthor {
    constructor({ authorRepository }) {
      this.authorRepository = authorRepository;
    }
  
    async getSongsByAuthorId(params,idAuthor, language) {
      const mess = language && language === 'en' ? message_en : message;
      const author = await this.authorRepository.findOne({
        where: {id_author: idAuthor},
      });

      if(!author){
        throw new ForbiddenError(mess.no_author,
            'author',
            'incorrect');
      }

      return await this.authorRepository.getSongsByAuthorId(params,idAuthor);
    }
  
  }
  
  export default QueryAuthor;
  