import SongUC from '../../application/use-cases/song/query-song';
import SongRepository from '../../infrastructure/orm/typeorm/repositories/song';
import GenreRepository from '../../infrastructure/orm/typeorm/repositories/genre';
import AlbumRepository from '../../infrastructure/orm/typeorm/repositories/album';

const getSongsByQuery = async function (httpRequest) {
    const language = httpRequest.headers?.Language;
    const songRepository = new SongRepository();
    const useCase = new SongUC({
        songRepository
    })

    const songs = await useCase.getSongsByQuery(httpRequest.query,
        language);
    return {
        statusCode: 200,
        body: songs,
    };
};

const updateSong = async function (httpRequest){
    const language = httpRequest.headers?.Language;
    const { id } = httpRequest.params;
    const songRepository = new SongRepository();
    const genreRepository = new GenreRepository();
    const albumRepository = new AlbumRepository();
    const useCase = new SongUC({
        songRepository,
        genreRepository,
        albumRepository
    })

    const song = await useCase.updateSong(id,
        httpRequest.body,
        language);
    return {
        statusCode: 200,
        body: song,
    };
}
module.exports = {
    getSongsByQuery,
    updateSong
}