import AuthorUC from '../../application/use-cases/author/query-author';
import AuthorRepository from '../../infrastructure/orm/typeorm/repositories/author';


const getSongsByAuthorId = async function (httpRequest) {
    const { id } = httpRequest.params;
    const language = httpRequest.headers?.Language;
    const authorRepository = new AuthorRepository();
    const useCase = new AuthorUC({
        authorRepository
    })

    const songs = await useCase.getSongsByAuthorId(httpRequest.query,id,
        language);
    return {
        statusCode: 200,
        body: songs,
    };
};

module.exports = {
    getSongsByAuthorId,
}