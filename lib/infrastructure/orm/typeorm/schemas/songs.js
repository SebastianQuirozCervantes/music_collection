import { EntitySchema } from 'typeorm';
import config from '../../../config/env';
import baseColumns from '../base-columns';

module.exports = new EntitySchema({
  name: 'song',
  tableName: `${config.DB.PREFIX}_SONGS`,
  columns: {
    ...baseColumns,
    id_song: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {
      type: 'varchar',
      default: null
    },
    release_date: {
        type: 'timestamp',
        default: null
    },
    cover: {
        type: 'varchar',
        default: null
    },
    duration: {
        type: 'time',
        default: null
    },
    bpm: {
        type: 'float',
        default: null
    }
  },
  relations: {
    album: {
        type: 'many-to-one',
        target: 'album',
        joinColumn: {
          name: 'id_album',
        },
        cascade: true,
        onDelete: 'CASCADE',
      },
    genre: {
        type: 'many-to-one',
        target: 'genre',
        joinColumn: {
          name: 'id_genre',
        },
        cascade: true,
        onDelete: 'CASCADE',
      },
      author_song: {
        type: 'one-to-many',
        target: 'author_song',
        inverseSide: 'song',
        cascade: ['insert', 'update', 'remove'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
  },
});
