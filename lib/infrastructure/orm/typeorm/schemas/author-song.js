import { EntitySchema } from 'typeorm';
import config from '../../../config/env';

module.exports = new EntitySchema({
  name: 'author_song',
  tableName: `${config.DB.PREFIX}_AUTHOR_SONG`,
  columns: {
    id_author_song: {
      primary: true,
      type: 'int',
      generated: true,
    },
  },
  relations: {
    author: {
        type: 'many-to-one',
        target: 'author',
        joinColumn: {
          name: 'id_author',
        },
        onDelete: 'CASCADE',
        inverseSide: 'author_song',
    },
    song: {
        type: 'many-to-one',
        target: 'song',
        joinColumn: {
            name: 'id_song',
        },
        inverseSide: 'author_song',
        onDelete: 'CASCADE',
    },
  },
});
