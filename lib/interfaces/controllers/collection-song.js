import CollectionSongUC from '../../application/use-cases/collection-song/query-collection-song';
import CollectionSongRepository from '../../infrastructure/orm/typeorm/repositories/collection-song';
import CollectionRepository from '../../infrastructure/orm/typeorm/repositories/collection';
import SongRepository from '../../infrastructure/orm/typeorm/repositories/song';

const insertSongInCollection = async function (httpRequest) {
    const language = httpRequest.headers?.Language;
    const collectionSongRepository = new CollectionSongRepository();
    const collectionRepository = new CollectionRepository();
    const songRepository = new SongRepository();
    const useCase = new CollectionSongUC({
        collectionSongRepository,
        collectionRepository,
        songRepository
    })

    const song = await useCase.insertSongInCollection(httpRequest, language)
    return {
        statusCode: 201,
        body: song,
    };
}
module.exports = {
    insertSongInCollection
}