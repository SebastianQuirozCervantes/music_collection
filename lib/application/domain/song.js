
import {
    requiredParam
  } from '../../infrastructure/helpers/validations';
  
  class Song {
    constructor({
      language,
      name  = requiredParam('name',language),
      release_date  = requiredParam('release_date',language),
      cover  = requiredParam('cover',language),
      duration  = requiredParam('duration',language),
      bpm,
      album  = requiredParam('album',language),
      genre = requiredParam('genre',language)
    }) {
      this.name = name;
      this.release_date = release_date;
      this.cover = cover;
      this.duration = duration;
      this.bpm = bpm;
      this.album = album;
      this.genre = genre;
    }
  }
  
  export default Song;
  