import CollectionUC from '../../application/use-cases/collection/query-collection';
import CollectionRepository from '../../infrastructure/orm/typeorm/repositories/collection';
import CollectionSongRepository from '../../infrastructure/orm/typeorm/repositories/collection-song';


const getSongsByCollectionId = async function (httpRequest) {
    const { id } = httpRequest.params;
    const language = httpRequest.headers?.Language;
    const collectionRepository = new CollectionRepository();
    const useCase = new CollectionUC({
        collectionRepository
    })

    const songs = await useCase.getSongsByCollectionId(httpRequest.user,httpRequest.query,id,
        language);
    return {
        statusCode: 200,
        body: songs,
    };
};

const insertSongInCollection = async function (httpRequest) {
    const language = httpRequest.headers?.Language;
    const collectionRepository = new CollectionRepository();    
    const collectionSongRepository = new CollectionSongRepository();
    const useCase = new CollectionUC({
        collectionRepository,
        collectionSongRepository
    })

    const song = await useCase.insertSongInCollection(httpRequest, language)
    return {
        statusCode: 201,
        body: song,
    };
}
module.exports = {
    getSongsByCollectionId,
    insertSongInCollection
}