import { EntitySchema } from 'typeorm';
import config from '../../../config/env';
import baseColumns from '../base-columns';

module.exports = new EntitySchema({
  name: 'album',
  tableName: `${config.DB.PREFIX}_ALBUMS`,
  columns: {
    ...baseColumns,
    id_album: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {
      type: 'varchar',
      default: null
    },
    description: {
      type: 'varchar',
      default: null
    },
    cover: {
      type: 'varchar',
      default: null
    },
    release_date: {
      type: 'timestamp',
      default: null
    }
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
  },
});
