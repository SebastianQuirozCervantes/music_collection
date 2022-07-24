import CollectionUC from '../../application/use-cases/collection/query-collection';
import CollectionRepository from '../../infrastructure/orm/typeorm/repositories/collection';

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

module.exports = {
    getSongsByCollectionId
}